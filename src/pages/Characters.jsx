import React, { useState, useEffect } from "react";
import { getPeople } from "../services/api";
import useFetch from "../hooks/useFetch";
import CharacterCard from "../components/CharacterCard";
import CharacterModal from "../components/CharacterModal";
import Pagination from "../components/Pagination";
import { logout } from "../services/auth";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const Characters = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const [allData, setAllData] = useState([]);
  const [filtered, setFiltered] = useState(null);

  const navigate = useNavigate();

 
  const { data, loading, error } = useFetch(() => getPeople(page), [page]);

  // FETCH ALL CHARACTERS + HOMEWORLD + SPECIES + FILMS
  useEffect(() => {
    const fetchAllPeople = async () => {
      let all = [];
      let next = `https://swapi.dev/api/people/?page=1`;

      while (next) {
        const res = await axios.get(next);
        all = [...all, ...res.data.results];
        next = res.data.next;
      }

      const fullData = await Promise.all(
        all.map(async (char) => {
          const homeworld = await axios.get(char.homeworld).then(r => r.data);

          return {
            ...char,
            homeworldName: homeworld.name,
            speciesNames: await Promise.all(
              char.species.map(async (s) => await axios.get(s).then(r => r.data.name))
            ),
            filmTitles: await Promise.all(
              char.films.map(async (f) => await axios.get(f).then(r => r.data.title))
            ),
          };
        })
      );

      setAllData(fullData);
    };

    fetchAllPeople();
  }, []);

 
  const placeholders = [
    "Search name...",
    "Search homeworld...",
    "Search film...",
    "Search species..."
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered(null); 
      return;
    }

    const q = search.toLowerCase();

    const results = allData.filter((char) => {
      return (
        char.name.toLowerCase().includes(q) ||
        char.homeworldName.toLowerCase().includes(q) ||
        char.filmTitles.some((f) => f.toLowerCase().includes(q)) ||
        char.speciesNames.some((s) => s.toLowerCase().includes(q))
      );
    });

    setFiltered(results);
  }, [search, allData]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const activeData = filtered ? { results: filtered } : data;

  if (loading) return <Loader />;
  if (error) return <p className="text-center mt-20 text-blue-500">Error loading data</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-7xl mx-auto">

      
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20">

          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Star Wars Characters
            </h1>
            <p className="text-gray-500 text-sm font-medium">
              Explore the galaxy far, far away...
            </p>
          </div>

        
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">

            <div className="relative w-full sm:w-80">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm z-10" />

              <input
                type="text"
                placeholder={placeholders[placeholderIndex]}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/90 border border-gray-200 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 shadow-sm hover:shadow-md"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

          
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 text-white rounded-xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95 font-semibold whitespace-nowrap"
            >
              Logout
            </button>
          </div>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {activeData?.results?.map((char, index) => (
            <CharacterCard
              key={char.name}
              character={char}
              onClick={() => setSelected(char)}
              index={index}
            />
          ))}
        </div>

      
        {activeData?.results?.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No characters found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}

      
        {!filtered && activeData && (
          <div className="flex justify-center">
            <Pagination
              next={activeData.next}
              prev={activeData.previous}
              onNext={() => setPage(page + 1)}
              onPrev={() => setPage(page - 1)}
            />
          </div>
        )}

        {selected && (
          <CharacterModal
            character={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Characters;

import React, { useEffect, useState } from "react";
import { getHomeworld } from "../services/api";

const CharacterModal = ({ character, onClose }) => {
  const [homeworld, setHomeworld] = useState(null);

  useEffect(() => {
    if (character.homeworld) {
      getHomeworld(character.homeworld).then(setHomeworld);
    }
  }, [character]);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50 animate-fadeIn">
  <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl transform transition-all duration-300 scale-100 hover:scale-[1.02]">
   
    <button
      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5"
      onClick={onClose}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

  
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold bg-gradient-to-r  from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
        
        {character.name}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
    </div>

    
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 text-center group hover:bg-blue-50 transition-colors duration-200">
          <div className="text-sm text-gray-500 mb-1">Height</div>
          <div className="text-lg font-semibold text-gray-900">{(character.height / 100).toFixed(2)} m</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 text-center group hover:bg-green-50 transition-colors duration-200">
          <div className="text-sm text-gray-500 mb-1">Mass</div>
          <div className="text-lg font-semibold text-gray-900">{character.mass} kg</div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600 font-medium">Birth Year</span>
          <span className="text-gray-900 font-semibold">{character.birth_year}</span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600 font-medium">Films</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
            {character.films.length}
          </span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600 font-medium">Date</span>
          <span className="text-gray-900 font-semibold">{new Date().toLocaleDateString('en-GB')}</span>
        </div>
      </div>

      {homeworld && (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 mt-4">
          <div className="text-sm text-gray-500 mb-2 font-medium">Homeworld</div>
          <div className="space-y-1">
            <div className="text-lg font-bold text-gray-900">{homeworld.name}</div>
            <div className="text-sm text-gray-600 flex flex-wrap gap-2">
              <span className="bg-white px-2 py-1 rounded-md shadow-sm">{homeworld.terrain}</span>
              <span className="bg-white px-2 py-1 rounded-md shadow-sm">{homeworld.climate}</span>
              <span className="bg-white px-2 py-1 rounded-md shadow-sm">Pop: {homeworld.population}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
  );
};

export default CharacterModal;

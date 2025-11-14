import React from "react";

const CharacterCard = ({ character, onClick }) => {
  const randomImage = `https://picsum.photos/200?random=${character.name.length}`;

  // Species → background colors
  const speciesColors = {
    Human: "bg-blue-100",
    Droid: "bg-gray-200",
    Wookiee: "bg-amber-100",
    "Yoda's species": "bg-green-200",
    Rodian: "bg-teal-200",
  };

  
  const speciesName =
    character.speciesNames?.length > 0 ? character.speciesNames[0] : null;

  
  const bgColor = speciesName ? speciesColors[speciesName] || "bg-white" : "bg-white";

  return (
    <div
      onClick={onClick}
      className={`${bgColor} p-4 rounded-2xl shadow-md hover:shadow-lg cursor-pointer transition relative`}
    >
      <img
        src={randomImage}
        alt={character.name}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />

      <h3 className="text-lg font-semibold text-left">{character.name}</h3>

  
      {speciesName && (
        <span className="absolute top-3 right-3 bg-white/80 text-gray-700 text-xs px-2 py-1 rounded-md shadow">
          {speciesName}
        </span>
      )}

      <span className="absolute bottom-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all rounded-full" />
    </div>
  );
};

export default CharacterCard;

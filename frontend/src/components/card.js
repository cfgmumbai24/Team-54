import React from 'react';

function Card({ image, title, description }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white transform hover:scale-105 transition-transform duration-300">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-teal-700">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

export default Card;

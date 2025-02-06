import React from "react";

const Card = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 m-3 flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-4 border-pink-300 hover:border-pink-500">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-48 h-48 object-cover mb-4 rounded-full border-4 border-pink-400"
        />
      )}
      <h2 className="text-2xl font-bold text-center text-pink-700">{title}</h2>
      {subtitle && <p className="text-pink-600 text-center mt-2">{subtitle}</p>}
    </div>
  );
};

export default Card;

// import React from "react";

// const WishCard = ({ pro }) => {
//   return (
//     <div>
//       <h2>{pro.title}</h2>
//     </div>
//   );
// };

// export default WishCard;

import React from "react";

const WishCard = ({ pro }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative w-full h-56">
        <img
          src={pro.image}
          alt={pro.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-emerald-600 text-white text-sm px-3 py-1 rounded-full shadow">
          {pro.price} BDT
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {pro.title}
        </h2>

        <p className="text-sm text-gray-500 flex items-center justify-between">
          <span>Sign: {pro.sign}</span>
          <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
            {pro.status}
          </span>
        </p>

        <button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 rounded-xl transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};

export default WishCard;

import React from "react";

const SimilarProductCard = () => {
  return (
    <div className="group cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 bg-white">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105 bg-gray-50"
          src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727451023/green_1_tm1yuw.jpg"
          alt="Product"
        />
      </div>

      <div className="p-3">
        <h1 className="font-semibold text-gray-800 text-sm truncate">
          Niky Blue Saree
        </h1>
        <p className="text-gray-500 text-xs mb-2">Banarasi Silk</p>

        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-800 text-sm">₹400</span>
          <span className="line-through text-gray-400 text-xs">₹900</span>
          <span className="text-teal-600 font-semibold text-xs">60% OFF</span>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;

// import React from "react";

// const SimilarProductCard = () => {
//   return (
//     <div>
//       <div className="group product-card-container">
//         <div className="card relative">
//           <img
//             className="card-media"
//             src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727451023/green_1_tm1yuw.jpg"
//             alt=""
//           />
//         </div>

//         <div className="details space-y-1 group-hover-effect rounded-md">
//           <div className="name">
//             <h1 className="font-semibold text-gray-800 text-base">Niky</h1>
//             <p className="text-gray-500 text-sm">Blue Banarasi Saree</p>
//           </div>
//           <div className="price flex items-center gap-3">
//             <span className="font-bold text-gray-800 text-lg">₹400</span>
//             <span className="thin-line-through text-gray-400 text-sm">
//               ₹900
//             </span>
//             <span className="text-teal-600 font-semibold text-sm">60% OFF</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SimilarProductCard;

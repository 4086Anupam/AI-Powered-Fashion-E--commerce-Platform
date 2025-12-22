// import React from 'react'

// const DealCard = () => {
//   return (
//     <div className='w-[13rem] cursor-pointer '>
//         <img
//         className='border-x-[7px] border-t-[7px] border-[#e62e00] w-full h-[12rem] object-cover object-top'
//         src="https://m.media-amazon.com/images/I/510uTHyDqGL.jpg" alt="" />
//         <div className='border-4 border-[#8800cc] bg-[#8800cc] text-white p-2 text-center'>
//             <p className='text-lg font-semibold'>Laptop Asus</p>
//             <p className='text-2xl font-bold'>20% off</p>
//             <p className='text-balance text-lg'>Shop now</p>
//         </div>
//     </div>
//   )
// }

// export default DealCard

import React from "react";
import { Deal } from "../../../../type/homeCategoryTypes";

const DealCard = ({ item }: { item: Deal }) => {
  return (
    <div
      className="w-[13rem] sm:w-[14rem] rounded-xl overflow-hidden shadow-md cursor-pointer bg-white 
                 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="relative">
        <img
          src={item.category.image}
          alt=""
          className="w-full h-[12rem] object-cover object-top rounded-t-xl"
        />

        {/* Discount Badge */}
        <div
          className="absolute top-2 right-2 bg-gradient-to-r from-[#ff512f] to-[#dd2476] 
                     text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md"
        >
          {item.discount}% OFF
        </div>
      </div>

      {/* Card Details */}
      <div
        className="bg-gradient-to-r from-[#8800cc] to-[#6a00b3] text-white 
                   p-3 text-center rounded-b-xl"
      >
        <p className="text-base font-medium tracking-wide">
          {item.category.name}
        </p>
        {/* <p className="text-xl font-bold mt-1">58%</p> */}
        <p className="text-sm mt-1 opacity-90">shop now</p>
      </div>
    </div>
  );
};

export default DealCard;

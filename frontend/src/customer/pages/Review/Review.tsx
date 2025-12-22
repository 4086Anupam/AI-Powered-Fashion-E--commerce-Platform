import React from "react";
import ReviewCard from "./ReviewCard";
import { Divider, LinearProgress, Rating } from "@mui/material";
import { teal, amber, red } from "@mui/material/colors";

const Review = () => {
  const ratingsData = [
    { label: "Excellent", value: 80, color: teal[500] },
    { label: "Very Good", value: 65, color: "#26a69a" },
    { label: "Good", value: 50, color: "#4db6ac" },
    { label: "Average", value: 25, color: amber[600] },
    { label: "Poor", value: 10, color: red[400] },
  ];

  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-12 lg:gap-20">
      {/* -------- Left Section: Product Summary -------- */}
      <section className="w-full lg:w-[30%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
        <img
          src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727451187/SoftSilkZariBanarasiSaree_1_fwms3w.jpg"
          alt="Product"
          className="w-full max-w-[500px] rounded-xl shadow-md object-cover"
        />

        <div className="space-y-2">
          <div>
            <p className="font-bold text-xl text-gray-800">Raam Clothing</p>
            <p className="text-gray-600 text-base">
              Silk Blend Kanjeevaram Saree
            </p>
          </div>

          {/* Price Section */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-2xl mt-3">
            <span className="font-bold text-gray-900">₹400</span>
            <span className="line-through text-gray-400 text-sm">₹900</span>
            <span className="text-teal-600 font-semibold text-sm">60% OFF</span>
          </div>
        </div>
      </section>

      {/* -------- Right Section: Reviews -------- */}
      <section className="w-full lg:w-[70%] space-y-8">
        {/* --- Review & Ratings Summary --- */}
        <div className="border rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">Review & Ratings</h2>

          {/* Overall Rating */}
          <div className="flex items-center gap-2 mb-4">
            <Rating value={4.5} precision={0.5} readOnly />
            <span className="text-gray-600">Ratings</span>
          </div>

          {/* Rating Breakdown */}
          <div className="space-y-3">
            {ratingsData.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <p className="w-24 text-sm text-gray-700">{item.label}</p>
                <div className="flex-1">
                  <LinearProgress
                    variant="determinate"
                    value={item.value}
                    sx={{
                      height: 8,
                      borderRadius: 5,
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: item.color,
                      },
                    }}
                  />
                </div>
                <p className="w-12 text-xs text-gray-500 text-right">19259</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Individual Reviews --- */}
        {[1, 1, 1, 1, 1, 1].map((_, i) => (
          <div key={i} className="space-y-4">
            <ReviewCard />
            {i !== 5 && <Divider />}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Review;

// import React from "react";
// import ReviewCard from "./ReviewCard";
// import { Divider } from "@mui/material";

// const Review = () => {
//   return (
//     <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
//       <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
//         <img
//           src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727451187/SoftSilkZariBanarasiSaree_1_fwms3w.jpg"
//           alt=""
//         />
//         <div className="">
//           <div>
//             <p className="font-bold text-xl">Addidas Clothing</p>
//             <p className="text-lg text-gray-600">Men,s white shirt</p>
//           </div>
//           {/* Price Section */}
//           <div className="mt-5">
//             <div className="flex items-center gap-3 text-2xl">
//               <span className="font-bold text-gray-800">₹400</span>
//               <span className="line-through text-gray-400 text-sm">₹900</span>
//               <span className="text-teal-600 font-semibold text-sm">
//                 60% OFF
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section>
//         {[1, 1, 1, , 1, 1].map((item) => (
//           <div className="space-y-3">
//             <ReviewCard />
//             <Divider />
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Review;

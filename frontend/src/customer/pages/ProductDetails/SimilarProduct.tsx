import React from "react";
import SimilarProductCard from "./SimilarProductCard";

const SimilarProduct = () => {
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
        <SimilarProductCard key={i} />
      ))}
    </div>
  );
};

export default SimilarProduct;

// import React from "react";
// import SimilarProductCard from "./SimilarProductCard";

// const SimilarProduct = () => {
//   return (
//     <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between gap-4 gap-y-8">
//       {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
//         <SimilarProductCard />
//       ))}
//     </div>
//   );
// };

// export default SimilarProduct;

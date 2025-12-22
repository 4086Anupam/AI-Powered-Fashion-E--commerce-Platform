// import React from "react";
// import { Product } from "../../../type/ProductTypes";
// import { Close } from "@mui/icons-material";
// import { useAppDispatch } from "../../../State/Store";
// import { addProductToWishlist } from "../../../State/Customer/wishlistSlice";

// const WishlistCard = ({ item }: { item: Product }) => {
//   const dispatch = useAppDispatch();
//   const handleWishlist = () => {
//     // e.stopPropagation();
//     item.id && dispatch(addProductToWishlist({ productId: item.id }));
//   };
//   return (
//     <div className=" w-60 relative">
//       <div className=" w-full h-[90%]">
//         <img src={item.images[0]} alt="" className=" object-top w-full" />
//       </div>
//       <div className=" pt-3 space-y-1">
//         <p>{item.title}</p>
//         <div className="price flex items-center gap-3">
//           <span className="font-sans text-gray-800">₹ {item.sellingPrice}</span>
//           <span className="thin-line-through text-gray-400">
//             ₹ {item.mrpPrice}
//           </span>
//           <span className="text-primary-color font-semibold">
//             {item.discountPercent}%
//           </span>
//         </div>
//       </div>
//       <div className=" absolute top-1 right-1 ">
//         <button onClick={handleWishlist}>
//           <Close
//             color="primary"
//             sx={{ fontSize: "2rem" }}
//             className=" cursor-pointer bg-white rounded-full"
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WishlistCard;
import React from "react";
import { Product } from "../../../type/ProductTypes";
import { Close } from "@mui/icons-material";
import { useAppDispatch } from "../../../State/Store";
import { addProductToWishlist } from "../../../State/Customer/wishlistSlice";
import {
  addItemToCart,
  fetchUserCart,
} from "../../../State/Customer/CartSlice";

const WishlistCard = ({ item }: { item: Product }) => {
  const dispatch = useAppDispatch();

  // ✅ Remove from wishlist
  const handleWishlist = () => {
    if (item.id) {
      dispatch(addProductToWishlist({ productId: item.id }));
    }
  };

  // ✅ Move to Cart
  const handleMoveToCart = () => {
    const jwt = localStorage.getItem("jwt") || "";
    if (!item.id || !jwt) {
      alert("Please log in first or select a valid product");
      return;
    }

    const request = {
      productId: item.id,
      size: "M", // You can make size dynamic if you add selection
      quantity: 1,
    };

    console.log("🛒 Moving to cart:", request);

    dispatch(addItemToCart({ jwt, request }))
      .unwrap()
      .then(() => {
        console.log("✅ Item moved to cart");
        dispatch(fetchUserCart(jwt)); // Refresh the cart
      })
      .catch((err) => {
        console.error("❌ Failed to move to cart:", err);
      });
  };

  return (
    <div className="relative w-60 bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Product Image */}
      <div className="w-full h-56 overflow-hidden bg-gray-50 flex items-center justify-center">
        <img
          src={item.images[0]}
          alt={item.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Remove (Close) Button */}
      <button
        onClick={handleWishlist}
        className="absolute top-2 right-2 bg-white/90 hover:bg-gray-100 rounded-full p-1 shadow-sm transition-all"
      >
        <Close
          color="primary"
          sx={{ fontSize: "1.6rem" }}
          className="cursor-pointer"
        />
      </button>

      {/* Product Details */}
      <div className="p-3 flex flex-col gap-1">
        <p className="font-medium text-gray-800 line-clamp-2 leading-snug">
          {item.title}
        </p>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-semibold text-gray-900">
            ₹{item.sellingPrice}
          </span>
          <span className="text-sm line-through text-gray-400">
            ₹{item.mrpPrice}
          </span>
          <span className="text-sm text-green-600 font-semibold">
            {item.discountPercent}% off
          </span>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-3 pb-3">
        <button
          onClick={handleMoveToCart}
          className="w-full py-2 bg-primary-color text-white rounded-lg font-medium hover:bg-primary-color/90 transition-colors"
        >
          Move to Cart
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;

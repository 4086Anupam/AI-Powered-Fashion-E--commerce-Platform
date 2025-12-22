// import { AddShoppingCart, Remove } from "@mui/icons-material";
// import { Button, Divider } from "@mui/material";
// import React from "react";

// const CartrItem = () => {
//   const handleUpdateQuantity = () => {};
//   return (
//     <div className="border rounded-md relative">
//       <div className="p-5 flex gap-3">
//         <div>
//           <img
//             className="w-[90px] rounded-md"
//             src="https://res.cloudinary.com/dxoqwusir/image/upload/v1727460133/4QdHw1UN_f8db19fa1b1947689b2cc1f461b25b14_fc2y1j.jpg"
//             alt=""
//           />
//         </div>
//         <div className="space-y-2">
//           <h1 className="font-semibold text-lg">Virani Clothing</h1>
//           <p className="text-gray-600 font-medium text-sm">
//             Turquoise Blue Stonework Satin Designer Saree
//           </p>

//           <p className="text-gray-400 text-xs">
//             <strong>Sold by: </strong>
//             Natural Lifestyle Products Private Limited
//           </p>
//           <p className="text-sm">7 days replacement available</p>
//           <p className="text-sm text-gray-500">
//             <strong>quantity: </strong>5
//           </p>
//         </div>
//       </div>
//       <Divider />
//       <div className="flex justify-between items-center">
//         <div className=" px-5 py-2 flex justify-between items-center">
//           <div className="flex items-center gap-2 w-[140px] justify-between">
//             <Button disabled={true} onClick={handleUpdateQuantity}>
//               <Remove />
//             </Button>
//             <span className="px-3">{5}</span>
//             <Button onClick={handleUpdateQuantity}>
//               <AddShoppingCart />
//             </Button>
//           </div>
//         </div>
//         <div className="pr-5">
//           <p className="text-gray-700 font-medium">₹ 799</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartrItem;

import React from "react";
import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import { CarItem } from "../../../type/cartType";
import { useAppDispatch } from "../../../State/Store";
// import {
//   fetchUserCart,
//   updateCartItem,
// } from "../../../State/Customer/CartSlice";
import {
  deleteCartItem,
  fetchUserCart,
  updateCartItem,
} from "../../../State/Customer/CartSlice";

const CartItemCard = ({ item }: { item: CarItem }) => {
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useAppDispatch();

  const handleUpdateQuantity = (value: number) => {
    if (!localStorage.getItem("jwt")) return;
    const jwt = localStorage.getItem("jwt") || "";
    setQuantity(item.quantity);
    console.log(quantity);
    dispatch(
      updateCartItem({
        jwt,
        cartItemId: item.id,
        cartItem: { quantity: item.quantity + value },
      })
    ).then(() => {
      // ✅ Re-fetch updated cart after success
      dispatch(fetchUserCart(jwt));
    });
  };

  const handleDeleteCartItem = () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) return;

    dispatch(deleteCartItem({ jwt, cartItemId: item.id }))
      .unwrap()
      .then(() => {
        console.log("🗑️ Item deleted successfully");
        dispatch(fetchUserCart(jwt)); // Refresh cart after deletion
      })
      .catch((err) => {
        console.error("❌ Failed to delete item:", err);
      });
  };

  return (
    <div className="relative border rounded-xl shadow-sm bg-white transition-all hover:shadow-md w-full max-w-3xl mx-auto">
      {/* ------- Top Section ------- */}
      <div className="p-4 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        {/* Product Image */}
        <div className="flex-shrink-0 mx-auto sm:mx-0">
          <div className="w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] overflow-hidden flex items-center justify-center bg-gray-50 rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src={item.product.images[0]}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between flex-grow space-y-3">
          <div>
            <h1 className="font-semibold text-base sm:text-lg text-gray-800">
              {item.product.seller?.businessDetails.businessName}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-snug">
              {item.product.title}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              <strong>Sold by:</strong> Natural Lifestyle Products Pvt. Ltd.
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              <strong>Quantity:</strong> {item.quantity}
            </p>
            <p className="text-xs sm:text-sm text-green-600 font-medium mt-1">
              7 Days Replacement Available
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ------- Bottom Section ------- */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 gap-3 sm:gap-0">
        {/* Quantity Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            size="small"
            onClick={() => handleUpdateQuantity(-1)}
            disabled={quantity === 1}
            className="min-w-[36px] sm:min-w-[40px]"
          >
            <Remove fontSize="small" />
          </Button>
          <span className="px-3 text-base sm:text-lg font-medium">
            {item.quantity}
          </span>
          <Button
            size="small"
            onClick={() => handleUpdateQuantity(1)}
            className="min-w-[36px] sm:min-w-[40px]"
          >
            <Add fontSize="small" />
          </Button>
        </div>

        {/* Price */}
        <div className="mt-2 sm:mt-0 text-center sm:text-right">
          <p className="text-base sm:text-lg font-semibold text-gray-800">
            ₹{item.sellingPrice}
          </p>
        </div>
      </div>

      {/* Close Button */}
      <div className="absolute top-2 right-2">
        <IconButton
          size="small"
          color="primary"
          onClick={handleDeleteCartItem}
          className="bg-gray-100 hover:bg-gray-200 transition-all"
        >
          <Close fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItemCard;

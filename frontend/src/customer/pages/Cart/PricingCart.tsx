// import { Divider } from "@mui/material";
// import React from "react";

// const PricingCart = () => {
//   return (
//     <>
//       <div className=" space-y-3 p-5">
//         <div className=" flex justify-between items-center">
//           <span>SubTotal</span>
//           <span>₹899</span>
//         </div>
//         <div className=" flex justify-between items-center">
//           <span>Discount</span>
//           <span>₹299</span>
//         </div>
//         <div className=" flex justify-between items-center">
//           <span>Shipping</span>
//           <span>₹99</span>
//         </div>
//         <div className=" flex justify-between items-center">
//           <span>Platform Fee</span>
//           <span>Free</span>
//         </div>
//       </div>
//       <Divider />
//       <div className=" flex justify-between items-center p-5 text-primary-color">
//         <span>Total</span>
//         <span>₹599</span>
//       </div>
//     </>
//   );
// };

// export default PricingCart;

// import { Divider } from "@mui/material";
// import React from "react";

// const PricingCart = () => {
//   return (
//     <>
//       <div className="space-y-3 sm:space-y-4 p-4 sm:p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
//         {/* Subtotal */}
//         <div className="flex justify-between items-center text-gray-700 text-sm sm:text-base">
//           <span>Subtotal</span>
//           <span className="font-medium">₹899</span>
//         </div>

//         {/* Discount */}
//         <div className="flex justify-between items-center text-gray-700 text-sm sm:text-base">
//           <span>Discount</span>
//           <span className="text-green-600 font-medium">− ₹299</span>
//         </div>

//         {/* Shipping */}
//         <div className="flex justify-between items-center text-gray-700 text-sm sm:text-base">
//           <span>Shipping</span>
//           <span className="font-medium">₹99</span>
//         </div>

//         {/* Platform Fee */}
//         <div className="flex justify-between items-center text-gray-700 text-sm sm:text-base">
//           <span>Platform Fee</span>
//           <span className="text-green-600 font-medium">Free</span>
//         </div>

//         <Divider className="!my-4" />

//         {/* Total */}
//         <div className="flex justify-between items-center text-gray-800 text-base sm:text-lg font-semibold">
//           <span>Total</span>
//           <span className="text-primary-color font-bold">₹599</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PricingCart;

import React, { useMemo } from "react";
import { Divider } from "@mui/material";
import { useAppSelector } from "../../../State/Store";

const PricingCart = () => {
  const cart = useAppSelector((state) => state.cart.cart);

  // // ✅ Calculate subtotal, discount, shipping, and total
  // const { subtotal, discount, shipping, total } = useMemo(() => {
  //   let subtotal = 0;
  //   let discount = 0;
  //   let shipping = 0;

  //   if (cart && cart.cartItems) {
  //     cart.cartItems.forEach((item) => {
  //       subtotal += item.sellingPrice * item.quantity;
  //       // If there's an original price, calculate discount
  //       if (item.product.mrpPrice) {
  //         discount +=
  //           (item.product.mrpPrice - item.sellingPrice) * item.quantity;
  //       }
  //     });
  //   }

  //   // Flat ₹99 shipping if cart not empty
  //   shipping = (cart?.cartItems?.length || 0) > 0 ? 99 : 0;

  //   const total = subtotal - discount + shipping;

  //   return { subtotal, discount, shipping, total };
  // }, [cart]);
  const { totalPrice, discount, shipping, total } = useMemo(() => {
    let totalPrice = 0; // MRP total
    let discount = 0;
    let sellingTotal = 0;
    let shipping = 0;

    if (cart && cart.cartItems) {
      cart.cartItems.forEach((item) => {
        const mrp = item.product.mrpPrice || 0;
        const sell = item.product.sellingPrice || 0;
        const qty = item.quantity || 1;

        totalPrice += mrp * qty; // ✅ MRP total
        sellingTotal += sell * qty; // ✅ Selling total
        discount += (mrp - sell) * qty; // ✅ Discount total
      });
    }

    shipping = (cart?.cartItems?.length || 0) > 0 ? 99 : 0;

    const total = sellingTotal + shipping; // ✅ Final Payable Amount

    return { totalPrice, discount, shipping, total };
  }, [cart]);

  return (
    <>
      <div className="space-y-3 sm:space-y-4 p-4 sm:p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
        {/* Subtotal */}
        <div className="flex justify-between items-center text-gray-700 text-sm sm:text-base">
          <span>Total price</span>
          <span className="font-medium">₹{totalPrice}</span>
        </div>

        {/* Discount */}
        <div className="flex justify-between items-center text-gray-700 text-sm sm:text-base">
          <span>Discount</span>
          <span className="text-green-600 font-medium">− ₹{discount}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between items-center text-gray-700 text-sm sm:text-base">
          <span>Shipping</span>
          <span className="font-medium">₹{shipping}</span>
        </div>

        {/* Platform Fee */}
        <div className="flex justify-between items-center text-gray-700 text-sm sm:text-base">
          <span>Platform Fee</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>

        <Divider className="!my-4" />

        {/* Total */}
        <div className="flex justify-between items-center text-gray-800 text-base sm:text-lg font-semibold">
          <span>Payable Total</span>
          <span className="text-primary-color font-bold">₹{total}</span>
        </div>
      </div>
    </>
  );
};

export default PricingCart;

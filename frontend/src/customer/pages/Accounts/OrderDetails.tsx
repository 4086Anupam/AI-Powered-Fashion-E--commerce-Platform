// import { Box, Button, Divider } from "@mui/material";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import OrderStepper from "./OrderStepper";
// import { Payment } from "@mui/icons-material";

// const OrderDetails = () => {
//   const navigate = useNavigate();
//   return (
//     <Box className="space-y-5">
//       <section className="flex flex-col gap-5 justify-center items-center">
//         <img
//           className="w-[100px]"
//           src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727452042/pro-ray-android-ios-cellecor-yes-original-imagydnsrany7qhy_1_m9n9t5.webp"
//           alt=""
//         />
//         <div className="text-sm space-y-1 text-center">
//           <h1 className="font-bold"> {"Virani Clothing"}</h1>
//           <p>
//             Cellecor RAY 1.43" AMOLED Display | 700 NITS | AOD | BT-Calling | AI
//             Voice | Split Screen Smartwatch (Black Strap, Free Size)
//           </p>
//           <p>
//             <strong>Size:</strong>M
//           </p>
//         </div>
//         <div>
//           <Button onClick={() => navigate(`/reviews/${5}/create`)}>
//             Write Review
//           </Button>
//         </div>
//       </section>

//       <section className="border p-5">
//         <OrderStepper orderStatus={"SHIPPED"} />
//       </section>

//       <div className="border p-5">
//         <h1 className="font-bold pb-3">Delivery Address</h1>
//         <div className="text-sm space-y-2">
//           <div className="flex gap-5 font-medium">
//             <p>{"Adarsha"}</p>
//             <Divider flexItem orientation="vertical" />
//             <p>{7501417553}</p>
//           </div>
//           <p>Address: Sarberia,P.S- Jaynagar, South 24 pgs,743372</p>
//         </div>
//       </div>

//       <div className="border space-y-4">
//         <div className="flex justify-between text-sm pt-5 px-5">
//           <div className="space-y-1">
//             <p className="font-bold">Total Item Price</p>
//             <p>
//               You saved{" "}
//               <span className="text-green-500 font-medium text-xs">
//                 ₹{699}.00
//               </span>{" "}
//               on this item
//             </p>
//           </div>
//           <p className="font-medium">₹{199999}.00</p>
//         </div>
//         <div className="px-5">
//           <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
//             <Payment />
//             <p>Pay On Delivery</p>
//           </div>
//         </div>
//         <Divider />
//         <div className="px-5 pb-5">
//           <p className="text-xs">
//             <strong>Sold by : </strong>
//             {"Addidas Clothin"}
//           </p>
//         </div>
//         <div className="p-10">
//           <Button
//             disabled={true}
//             // onClick={handleCancelOrder}
//             color="error"
//             sx={{ py: "0.7rem" }}
//             className=""
//             variant="outlined"
//             fullWidth
//           >
//             {true ? "order canceled" : "Cancel Order"}
//           </Button>
//         </div>
//       </div>
//     </Box>
//   );
// };

// export default OrderDetails;

import { Box, Button, Divider } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { Payment } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import {
  fetchOrderById,
  fetchOrderItemById,
} from "../../../State/Customer/orderSlice";
import { fetchSellerOrders } from "../../../State/Seller/sellerOrderSlice";

const OrderDetails = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { orderId, orderItemId } = useParams();
  const order = useAppSelector((state) => state.order);
  useEffect(() => {
    dispatch(
      fetchOrderById({
        orderId: Number(orderId),
        jwt: localStorage.getItem("jwt") || "",
      })
    );
    dispatch(
      fetchOrderItemById({
        orderItemId: Number(orderItemId),
        jwt: localStorage.getItem("jwt") || "",
      })
    );
  }, []);

  console.log(order.currentOrder?.orderStatus);

  return (
    <Box className="space-y-6 p-5 bg-gray-50 rounded-xl shadow-sm">
      {/* --- Product Section --- */}
      <section className="flex flex-col gap-4 justify-center items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
        <img
          className="w-[100px] rounded-md"
          // src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727452042/pro-ray-android-ios-cellecor-yes-original-imagydnsrany7qhy_1_m9n9t5.webp"
          src={order.orderItem?.product.images[0]}
          alt="Product"
        />
        <h1>{}</h1>

        <div className="text-sm space-y-2 text-center max-w-md">
          <h1 className="font-semibold text-gray-800 text-base">
            {order.orderItem?.product.seller?.businessDetails.businessName}
          </h1>
          <p className="text-gray-600 leading-snug">
            {order.orderItem?.product.title}
          </p>
          <p className="text-gray-700">
            <strong>Size:</strong> M
          </p>
        </div>

        <Button
          onClick={() => navigate(`/reviews/${5}/create`)}
          variant="outlined"
          color="primary"
          size="small"
          className="!rounded-full !normal-case"
        >
          Write Review
        </Button>
      </section>

      {/* --- Stepper Section --- */}
      <section className="border p-6 rounded-xl bg-white shadow-sm">
        <OrderStepper
          orderStatus={order.currentOrder?.orderStatus || "PENDING"}
        />
      </section>

      {/* --- Address Section --- */}
      <div className="border p-6 rounded-xl bg-white shadow-sm">
        <h1 className="font-bold pb-3 text-gray-800">Delivery Address</h1>
        <div className="text-sm space-y-2 text-gray-700">
          <div className="flex gap-5 font-medium items-center">
            <p>{order.currentOrder?.shippingAddress.name}</p>
            <Divider flexItem orientation="vertical" />
            <p>{order.currentOrder?.shippingAddress.mobile}</p>
          </div>
          <p className="leading-snug">
            <strong>Address:</strong>
            {order.currentOrder?.shippingAddress.address},
            {order.currentOrder?.shippingAddress.city},
            {order.currentOrder?.shippingAddress.state},
            {order.currentOrder?.shippingAddress.pinCode}
          </p>
        </div>
      </div>

      {/* --- Price & Payment Section --- */}
      <div className="border rounded-xl bg-white shadow-sm space-y-4">
        <div className="flex justify-between text-sm pt-5 px-6">
          <div className="space-y-1">
            <p className="font-bold text-gray-800">Total Item Price</p>
            <p className="text-gray-600">
              You saved{" "}
              <span className="text-green-600 font-medium text-xs">
                ₹{order.orderItem?.sellingPrice}.00
              </span>{" "}
              on this item
            </p>
          </div>
          <p className="font-semibold text-gray-800 text-base">
            ₹{order.orderItem?.sellingPrice}.00
          </p>
        </div>

        <div className="px-6">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3 text-teal-700 rounded-md">
            <Payment fontSize="small" />
            <p>Pay On Delivery</p>
          </div>
        </div>

        <Divider />

        <div className="px-6 pb-5 text-gray-700">
          <p className="text-xs">
            <strong>Sold by: </strong>{" "}
            {order.orderItem?.product.seller?.businessDetails.businessName}
          </p>
        </div>

        {/* <div className="px-10 pb-8">
          <Button
            disabled={false}
            color="error"
            sx={{
              py: "0.8rem",
              borderRadius: "12px",
              textTransform: "capitalize",
              fontWeight: 600,
              opacity: 0.9,
            }}
            variant="outlined"
            fullWidth
          >
            {true ? "Order Canceled" : "Cancel Order"}
          </Button>
        </div> */}
        <div className="px-10 pb-8">
          <Button
            disabled={false} // ✅ disable only when canceled
            color="error"
            sx={{
              py: "0.8rem",
              borderRadius: "12px",
              textTransform: "capitalize",
              fontWeight: 600,
              opacity: true ? 0.7 : 1, // ✅ dim when disabled
              cursor: true ? "not-allowed" : "pointer", // ✅ pointer when active
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: true ? "transparent" : "#ffeaea",
              },
            }}
            variant="outlined"
            fullWidth
            // onClick={handleCancelOrder} ✅ you can add your handler here
          >
            {true ? "Order Canceled" : "Cancel Order"}
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetails;

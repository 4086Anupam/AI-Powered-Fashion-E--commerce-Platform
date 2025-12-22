import React, { useEffect } from "react";
import OrderItem from "./OrderItem";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchUserOrderHistory } from "../../../State/Customer/orderSlice";

const Order = () => {
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.order);
  useEffect(() => {
    dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""));
  }, []);
  return (
    <div className=" text-sm min-h-screen">
      <div className=" pb-5">
        <h1 className=" font-semibold">All Orders</h1>
        <p>from any time</p>
      </div>
      <div className=" space-y-2">
        {/* {order.orders.map((item) => (
          order.orderItem.map(()=>{
            <OrderItem item={item.orderItems} />
          })
        ))} */}

        {order.orders.map((orderData) =>
          orderData.orderItems.map((item, index) => (
            <OrderItem key={index} item={item} order={orderData} />
          ))
        )}
      </div>
    </div>
  );
};

export default Order;

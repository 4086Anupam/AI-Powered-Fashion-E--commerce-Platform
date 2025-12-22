import { Divider } from "@mui/material";
import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Order from "./Order";
import OrderDetails from "./OrderDetails";
import UserDetails from "./UserDetails";
import Address from "./Address";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { logout } from "../../../State/AuthSlice";

const menu = [
  { name: "orders", path: "/account/orders" },
  { name: "profile", path: "/account" },
  { name: "Saved Cards", path: "/account/saved-card" },
  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" },
];

const Account = () => {
  const auth = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (item: any) => {
    if (item.path == "/") {
      dispatch(logout());
    }
    navigate(item.path);
    console.log(item.name);
  };
  return (
    <div className=" px-5 lg:px-52 min-h-screen mt-10">
      <div>
        <h1 className=" text-xl font-bold pb-5">{auth.user?.fullName}</h1>
      </div>
      <Divider />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
        <section className=" col-span-1 lg:border-r lg:pr5 py-5 h-full ">
          {menu.map((item) => (
            <div
              onClick={() => handleClick(item)}
              key={item.name}
              className={`${
                item.path === location.pathname
                  ? "bg-primary-color text-white"
                  : ""
              } py-3 cursor-pointer hover:text-white hover:bg-primary-color px-5 rounded-md border-b`}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </section>
        <section className="right lg:col-span-2 lg:pl-5 py-5">
          {/* <Order /> */}
          {/* <OrderDetails /> */}
          {/* <UserDetails /> */}
          {/* <Address /> */}
          <Routes>
            <Route path="/orders" element={<Order />} />
            <Route
              path="/order/:orderId/:orderItemId"
              element={<OrderDetails />}
            />
            <Route path="/" element={<UserDetails />} />
            <Route path="/addresses" element={<Address />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default Account;

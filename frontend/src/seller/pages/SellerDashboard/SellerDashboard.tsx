import React from "react";
import { Outlet } from "react-router-dom";
import SellerDrawerList from "../../components/SellerDrawerList/SellerDrawerList";
import SellerRoutes from "../../../Routes/SellerRouts/SellerRoutes";

const SellerDashboard = () => {
  const toggleDrawer = () => {};

  return (
    <div className="lg:flex lg:h-[90vh]">
      {/* Sidebar */}
      <section className="hidden lg:block h-full">
        <SellerDrawerList toggleDrawer={toggleDrawer} />
      </section>

      {/* Content */}
      <section className="p-10 w-full lg:w-[80%] overflow-y-auto">
        <SellerRoutes />
      </section>
    </div>
  );
};

export default SellerDashboard;

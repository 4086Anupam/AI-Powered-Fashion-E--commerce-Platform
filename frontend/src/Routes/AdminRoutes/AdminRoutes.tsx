import React from "react";
import { Route, Routes } from "react-router-dom";
import SellerTables from "../../admin/Pages/Sellers/SellerTables";
import Coupon from "../../admin/Pages/Coupon/Coupon";
import AddCoupon from "../../admin/Pages/Coupon/AddCoupon";
import GridTable from "../../admin/Pages/HomePage/GridTable";
import ElectriCategory from "../../customer/pages/Home/ElectricCtegory/ElectriCategory";
import ElectronicTable from "../../admin/Pages/HomePage/ElectronicTable";
import ShopByCategory from "../../admin/Pages/HomePage/ShopByCategory";
import Deal from "../../admin/Pages/HomePage/Deal";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<SellerTables />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/add-coupon" element={<AddCoupon />} />
        <Route path="/home-page" element={<GridTable />} />
        <Route path="/electronics-category" element={<ElectronicTable />} />
        <Route path="/shop-by-category" element={<ShopByCategory />} />
        <Route path="/deals" element={<Deal />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;

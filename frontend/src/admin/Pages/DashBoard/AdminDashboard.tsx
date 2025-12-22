import React, { useEffect } from "react";
import AdminDrawerList from "./AdminDrawerList";
import AdminRoutes from "../../../Routes/AdminRoutes/AdminRoutes";
import { useAppDispatch } from "../../../State/Store";
import { fetchHomeCategories } from "../../../State/Admin/adminSlice";

const AdminDashboard = () => {
  const toggleDrawer = () => {};
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHomeCategories());
  }, []);
  return (
    <div className="lg:flex lg:h-[90vh]">
      {/* Sidebar */}
      <section className="hidden lg:block h-full">
        <AdminDrawerList toggleDrawer={toggleDrawer} />
      </section>

      {/* Content */}
      <section className="p-10 w-full lg:w-[80%] overflow-y-auto">
        <AdminRoutes />
      </section>
    </div>
  );
};

export default AdminDashboard;

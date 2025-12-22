import React from "react";
import ElectriCategory from "./ElectricCtegory/ElectriCategory";
import CategoryGrid from "./CtegoryGrid/CategoryGrid";
import Deal from "./Deal/Deal";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import { SpaTwoTone, Storefront } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="space-y-5 lg:space-y-10 relative">
        {/* <ElectriCategory /> */}
        <CategoryGrid />
        {/* <Deal/> */}
        <section className="pt-20">
          <h1 className="text-lg text-center lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10">
            TODAY'S DEAL
          </h1>
          <Deal />
        </section>
        <section className="py-20">
          <h1 className="text-lg text-center lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10">
            SHOP BY CATEGORY
          </h1>
          <ShopByCategory />
        </section>
        <section className="lg:px-20 py-10 relative h-[200px] lg:h-[450px] object-cover">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-118763.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
          />
          <div className="absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3">
            <h1>Sell Your Product</h1>
            <p className="text-lg md:text-2xl">
              With{" "}
              <span className="logo text-primary-color">Stylence Bazzar</span>
            </p>
            <div className="pt-6 flex justify-center ">
              <Button
                onClick={() => navigate("/become-seller")}
                startIcon={<Storefront />}
                variant="contained"
                size="large"
              >
                Become Seller
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

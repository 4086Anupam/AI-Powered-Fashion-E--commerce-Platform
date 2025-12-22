import React from "react";
import "./ShopByCategory.css";
import { HomeCategory } from "../../../../type/homeCategoryTypes";
const ShopByCategoryCard = ({ item }: { item: HomeCategory }) => {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer group">
      <div className=" custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full  border-[3px] border-primary-color">
        <img
          src={item.image}
          alt={item.name}
          className="rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
        />
      </div>
      <h1>{item.name}</h1>
    </div>
  );
};

export default ShopByCategoryCard;

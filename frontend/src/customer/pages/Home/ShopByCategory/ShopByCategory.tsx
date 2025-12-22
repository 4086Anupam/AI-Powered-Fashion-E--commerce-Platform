import React from "react";
import ShopByCategoryCard from "./ShopByCategoryCard";
import { useAppSelector } from "../../../../State/Store";

const ShopByCategory = () => {
  const customer = useAppSelector((state) => state.customer);
  return (
    <div className="flex flex-wrap justify-between gap-7 lg:px-20">
      {/* {[1,1,1,1,1,1,1,1,1,1,1,1].map((item) =><ShopByCategoryCard/> )} */}
      {customer.homePageData?.shopByCategories.map((item) => (
        <ShopByCategoryCard item={item} />
      ))}
    </div>
  );
};

export default ShopByCategory;

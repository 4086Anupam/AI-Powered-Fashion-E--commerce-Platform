import React from "react";
import HomeCategoryTable from "./HomeCtegoryTable";
import { useAppSelector } from "../../../State/Store";

const ShopByCategory = () => {
  const customer = useAppSelector((state) => state.customer);
  return (
    <div>
      <HomeCategoryTable data={customer.homePageData?.shopByCategories || []} />
    </div>
  );
};

export default ShopByCategory;

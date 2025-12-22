import React from "react";
import HomeCategoryTable from "./HomeCtegoryTable";
import { useAppSelector } from "../../../State/Store";

const DealCategoryTable = () => {
  const customer = useAppSelector((state) => state.customer);
  return (
    <div>
      <HomeCategoryTable data={customer.homePageData?.dealCategories || []} />
    </div>
  );
};

export default DealCategoryTable;

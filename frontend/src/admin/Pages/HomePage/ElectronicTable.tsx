import React from "react";
import HomeCategoryTable from "./HomeCtegoryTable";
import { useAppSelector } from "../../../State/Store";

const ElectronicTable = () => {
  const customer = useAppSelector((state) => state.customer);
  return (
    <div>
      <HomeCategoryTable
        data={customer.homePageData?.electricCategories || []}
      />
    </div>
  );
};

export default ElectronicTable;

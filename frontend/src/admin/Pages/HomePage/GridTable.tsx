import React from "react";
import HomeCategoryTable from "./HomeCtegoryTable";
import { useAppSelector } from "../../../State/Store";

const GridTable = () => {
  const customer = useAppSelector((state) => state.customer);
  return (
    <div>
      <HomeCategoryTable data={customer.homePageData?.grid || []} />
    </div>
  );
};

export default GridTable;

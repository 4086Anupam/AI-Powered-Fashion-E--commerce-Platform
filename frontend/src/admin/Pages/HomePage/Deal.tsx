import { Button } from "@mui/material";
import React, { useState } from "react";
import DealTable from "./DealTable";
import DealCard from "../../../customer/pages/Home/Deal/DealCard";
import CreateDealForm from "./CreateDealForm";
import DealCategoryTable from "./DealCategoryTable";

const tabs = ["Deals", "Category", "Create Deal"];
const Deal = () => {
  const [activeTab, setActiveTabl] = useState("Deals");
  return (
    <div>
      <div className=" flex gap-4">
        {tabs.map((item) => (
          <Button
            onClick={() => setActiveTabl(item)}
            variant={activeTab == item ? "contained" : "outlined"}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className=" mt-10">
        {activeTab == "Deals" ? (
          <DealTable />
        ) : activeTab == "Category" ? (
          <DealCategoryTable />
        ) : (
          <div className=" mt5 flex flex-col justify-center items-center h-[70vh]">
            <CreateDealForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Deal;

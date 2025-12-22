import { Close } from "@mui/icons-material";
import { Radio } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../../State/Store";
import { deleteAddress } from "../../../State/Customer/addressSlice";

interface AddressCardProps {
  id: number;
  name: string;
  mobile: string;
  address: string;
  isSelected: boolean;
  onSelect: () => void;
}

const AddressCard: React.FC<AddressCardProps> = ({
  id,
  name,
  mobile,
  address,
  isSelected,
  onSelect,
}) => {
  const dispatch = useAppDispatch();

  const handleDeleteAddress = () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) return;
    dispatch(deleteAddress({ jwt, addressId: id }));
  };

  return (
    <div
      className={`relative p-5 border rounded-md flex items-start hover:shadow-sm transition-all ${
        isSelected ? "border-blue-500 bg-blue-50" : ""
      }`}
    >
      <Radio checked={isSelected} onChange={onSelect} name="address-radio" />
      <div className="space-y-2 pt-1">
        <h1 className="font-medium">{name}</h1>
        <p className="w-[320px] text-sm text-gray-700">{address}</p>
        <p className="text-sm">
          <strong>Mobile:</strong> {mobile}
        </p>
      </div>
      <div className="absolute top-1 right-1">
        <button onClick={handleDeleteAddress}>
          <Close
            color="primary"
            sx={{ fontSize: "2rem" }}
            className="cursor-pointer bg-white rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default AddressCard;

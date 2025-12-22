import React from "react";
import { Close } from "@mui/icons-material";
import { useAppDispatch } from "../../../State/Store";
import { deleteAddress } from "../../../State/Customer/addressSlice";

interface UserAddressCardProps {
  id: number;
  name: string;
  mobile: string;
  address: string;
}

const UserAddressCard: React.FC<UserAddressCardProps> = ({
  id,
  name,
  mobile,
  address,
}) => {
  const dispatch = useAppDispatch();

  const handleDeleteAddress = () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) return;

    dispatch(deleteAddress({ jwt, addressId: id }));
  };

  return (
    <div className="relative p-5 border rounded-md bg-white shadow-sm hover:shadow-md transition-all">
      <div className="absolute top-1 right-1">
        <button onClick={handleDeleteAddress}>
          <Close
            color="primary"
            sx={{ fontSize: "2rem" }}
            className="cursor-pointer bg-white rounded-full"
          />
        </button>
      </div>

      <div className="space-y-2 pt-2">
        <h1 className="font-semibold text-gray-800">{name}</h1>
        <p className="text-sm text-gray-600 w-[320px]">{address}</p>
        <p className="text-sm text-gray-700">
          <strong>Mobile:</strong> {mobile}
        </p>
      </div>
    </div>
  );
};

export default UserAddressCard;

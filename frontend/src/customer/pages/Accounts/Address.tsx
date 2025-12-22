import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { getAllAddresses } from "../../../State/Customer/addressSlice";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Modal } from "@mui/material";
import UserAddressCard from "./UserADddressCard";
import AddressForm from "../CheckOut/AddressFrom";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 3,
};

const Address: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const jwt = localStorage.getItem("jwt");
  const dispatch = useAppDispatch();
  const { addresses, loading } = useAppSelector((state) => state.address);

  useEffect(() => {
    if (jwt) {
      dispatch(getAllAddresses(jwt));
    }
  }, [dispatch, jwt]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg text-gray-800">Your Addresses</h1>
        <Button
          onClick={handleOpen}
          variant="outlined"
          size="small"
          startIcon={<AddIcon />}
          sx={{ textTransform: "none", fontWeight: 500 }}
        >
          Add New Address
        </Button>
      </div>

      {loading ? (
        <p>Loading addresses...</p>
      ) : addresses.length === 0 ? (
        <p>No addresses found.</p>
      ) : (
        <div className="space-y-3">
          {addresses.map((item) => (
            <UserAddressCard
              key={item.id}
              id={item.id!}
              name={item.name}
              mobile={item.mobile}
              address={`${item.address}, ${item.locality}, ${item.city}, ${item.state} - ${item.pinCode}`}
            />
          ))}
        </div>
      )}

      {/* ---------------- Address Modal ---------------- */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <AddressForm paymentGateWay="{paymentGateWay}" />
        </Box>
      </Modal>
    </div>
  );
};

export default Address;

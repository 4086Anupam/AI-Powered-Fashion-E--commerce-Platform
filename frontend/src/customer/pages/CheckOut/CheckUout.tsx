import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddressCard from "./AddressCard";
import AddIcon from "@mui/icons-material/Add";
import AddressFrom from "./AddressFrom";
import PricingCart from "../Cart/PricingCart";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { getAllAddresses } from "../../../State/Customer/addressSlice";
import { createOrder } from "../../../State/Customer/orderSlice";

const style = {
  position: "absolute",
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

const PaymentGateWayList = [
  {
    value: "RAZORPAY",
    image:
      "https://razorpay.com/newsroom-content/uploads/2020/12/output-onlinepngtools-1-1.png",
    label: "Razorpay",
  },
  {
    value: "STRIPE",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png",
    label: "Stripe",
  },
];

const CheckOut = () => {
  const [open, setOpen] = useState(false);
  const [paymentGateWay, setPaymentGateWay] = useState("RAZORPAY");
  const [selectedAddress, setSelectedAddress] = useState<any | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePaymentChange = (e: any) => {
    setPaymentGateWay(e.target.value);
  };

  const jwt = localStorage.getItem("jwt");
  const dispatch = useAppDispatch();
  const { addresses } = useAppSelector((state) => state.address);

  useEffect(() => {
    if (jwt) {
      dispatch(getAllAddresses(jwt));
    }
  }, [dispatch, jwt]);

  const handleSelectAddress = (address: any) => {
    setSelectedAddress(address);
    console.log("Selected Address (formatted):", {
      name: address.name,
      mobile: address.mobile,
      pinCode: address.pinCode,
      address: address.address,
      city: address.city,
      state: address.state,
      locality: address.locality,
    });
  };

  const handlePayment = () => {
    if (!jwt || !selectedAddress) {
      alert("Please select an address before proceeding.");
      return;
    }

    dispatch(
      createOrder({
        address: {
          name: selectedAddress.name,
          mobile: selectedAddress.mobile,
          pinCode: selectedAddress.pinCode,
          address: selectedAddress.address,
          city: selectedAddress.city,
          state: selectedAddress.state,
          locality: selectedAddress.locality,
        },
        jwt,
        paymentGateway: paymentGateWay,
      })
    );

    console.log("🟢 Creating order with:", {
      address: selectedAddress,
      paymentGateway: paymentGateWay,
    });
  };

  return (
    <>
      <div className="pt-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 min-h-screen bg-gray-50">
        <div className="space-y-6 lg:space-y-0 lg:grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
          {/* ---------------- Address Section ---------------- */}
          <div className="col-span-2 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <h1 className="font-semibold text-lg sm:text-xl text-gray-800">
                Select Address
              </h1>
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

            <div className="text-xs sm:text-sm font-medium space-y-4">
              <p className="text-gray-700">Saved Addresses</p>

              <div className="space-y-3">
                {addresses.map((item, index) => (
                  <AddressCard
                    key={index}
                    id={item.id!}
                    name={item.name}
                    mobile={item.mobile}
                    address={`${item.address}, ${item.city}, ${item.state} - ${item.pinCode}`}
                    isSelected={selectedAddress?.id === item.id}
                    onSelect={() => handleSelectAddress(item)}
                  />
                ))}
              </div>

              <div className="py-4 px-5 rounded-md border border-dashed hover:bg-gray-50 transition-all">
                <Button
                  onClick={handleOpen}
                  startIcon={<AddIcon />}
                  variant="text"
                  sx={{ textTransform: "none", fontWeight: 500 }}
                >
                  Add Another Address
                </Button>
              </div>
            </div>
          </div>

          {/* ---------------- Right Section ---------------- */}
          <div className="col-span-1 space-y-5">
            {/* ---- Payment Gateway ---- */}
            <div className="space-y-3 border p-5 rounded-md bg-white shadow-sm hover:shadow-md transition-all">
              <h1 className="text-primary-color font-medium text-center pb-2 text-base sm:text-lg">
                Choose Payment Gateway
              </h1>

              <RadioGroup
                row
                aria-labelledby="payment-method"
                name="payment-method"
                className="flex flex-wrap justify-center sm:justify-between gap-3"
                onChange={handlePaymentChange}
                value={paymentGateWay}
              >
                {PaymentGateWayList.map((item, index) => (
                  <FormControlLabel
                    key={index}
                    className="rounded-md flex justify-center items-center px-2 py-1 sm:w-[45%] md:w-[40%] hover:bg-gray-50 transition-all"
                    value={item.value}
                    control={<Radio size="small" />}
                    label={
                      <img
                        className={`${
                          item.value === "STRIPE" ? "w-20" : "w-16"
                        } object-contain`}
                        src={item.image}
                        alt={item.label}
                      />
                    }
                  />
                ))}
              </RadioGroup>
            </div>

            {/* ---- Pricing Cart ---- */}
            <div className="border rounded-md bg-white shadow-sm hover:shadow-md transition-all">
              <PricingCart />
              <div className="p-5 sm:p-6 bg-white border-t">
                <Button
                  onClick={handlePayment}
                  fullWidth
                  sx={{
                    py: 1.3,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "0.95rem",
                  }}
                  variant="contained"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Address Modal ---------------- */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <AddressFrom paymentGateWay={paymentGateWay} />
        </Box>
      </Modal>
    </>
  );
};

export default CheckOut;

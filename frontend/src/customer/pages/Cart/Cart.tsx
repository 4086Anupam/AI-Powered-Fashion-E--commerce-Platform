import React, { useEffect, useState } from "react";
import { Close, LocalOffer } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import { teal } from "@mui/material/colors";
import PricingCart from "./PricingCart";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchUserCart } from "../../../State/Customer/CartSlice";
import CartItemCard from "./CartrItem";

const Cart = () => {
  const [cuponCode, setCuponCode] = useState("");
  const handleChange = (e: any) => {
    setCuponCode(e.target.value);
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchUserCart(localStorage.getItem("jwt") || ""));
  }, []);
  useEffect(() => {
    console.log("at Cart cart item -------", cart.cart?.id);
  }, [cart]);

  return (
    <div className="pt-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
        {/* ------- Cart Items Section ------- */}
        <div className="cattItemSection lg:col-span-2 space-y-4">
          {cart.cart?.cartItems.map((item, index) => (
            // <p key={index}>{item.product.title}</p>
            <CartItemCard item={item} />
          ))}
        </div>

        {/* ------- Summary Section ------- */}
        <div className="col-span-1 text-sm space-y-4">
          {/* Coupon Box */}
          <div className="border rounded-lg px-5 py-4 space-y-5 bg-white shadow-sm hover:shadow-md transition-all">
            <div className="flex gap-2 sm:gap-3 text-sm items-center font-medium text-gray-700">
              <LocalOffer sx={{ color: teal[600], fontSize: "18px" }} />
              <span>Apply Coupons</span>
            </div>

            {true ? (
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                <TextField
                  onChange={handleChange}
                  id="outlined-basic"
                  placeholder="Enter coupon code"
                  size="small"
                  fullWidth
                  variant="outlined"
                />
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: teal[600],
                    textTransform: "none",
                    "&:hover": { backgroundColor: teal[700] },
                  }}
                >
                  Apply
                </Button>
              </div>
            ) : (
              <div className="flex justify-between items-center border rounded-md px-3 py-1.5">
                <span className="text-gray-700 text-sm">
                  <strong>{cuponCode}</strong> applied
                </span>
                <IconButton size="small">
                  <Close className="text-red-600" fontSize="small" />
                </IconButton>
              </div>
            )}
          </div>
          <div className=" border rounded-md">
            <PricingCart />
            <div className=" p-10 bg-white">
              <Button
                fullWidth
                sx={{ py: "11px" }}
                variant="contained"
                onClick={() => navigate("/checkout")}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

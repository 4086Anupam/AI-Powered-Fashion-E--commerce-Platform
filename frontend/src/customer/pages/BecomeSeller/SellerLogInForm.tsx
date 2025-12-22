import { Button, CircularProgress, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { sellerLogin, sendLogInSignupOtp } from "../../../State/AuthSlice";
import { useNavigate } from "react-router-dom";

const SellerLogInForm = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("form data ", values);
      dispatch(sellerLogin(values))
        .unwrap()
        .then(() => {
          navigate("/seller/dashboard");
        })
        .catch((error) => {
          console.log("Login failed:", error);
        });
    },
  });
  // const handleSendOtp = () => {
  //   dispatch(sendLogInSignupOtp({ email: formik.values.email }));
  // };
  const handleSendOtp = () => {
    dispatch(
      sendLogInSignupOtp({ email: formik.values.email, role: "ROLE_SELLER" })
    );
  };

  return (
    <div>
      <p className=" text-xl font-bold text-center pb-9 text-primary-color">
        Login As Seller
      </p>
      <div className=" space-y-5">
        <TextField
          fullWidth
          name="email"
          label="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {auth.otpSent && (
          <div className=" space-y-2">
            <p className=" font-medium text-sm opacity-60">
              Enter Otp send to your email
            </p>
            <TextField
              fullWidth
              name="otp"
              label="Otp"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
          </div>
        )}
        {/* <Button
          onClick={handleSendOtp}
          fullWidth
          variant="contained"
          sx={{ py: "11px" }}
        >
          Sent Otp
        </Button> */}

        {auth.otpSent ? (
          <Button
            onClick={() => formik.handleSubmit()}
            fullWidth
            variant="contained"
            sx={{ py: "11px" }}
          >
            Login
          </Button>
        ) : (
          <Button
            onClick={handleSendOtp}
            fullWidth
            variant="outlined"
            sx={{
              py: "11px",
              textTransform: "none",
              fontWeight: 600,
              borderColor: "#2563eb",
              color: "#2563eb",
              "&:hover": { borderColor: "#1e40af", color: "#1e40af" },
            }}
          >
            {auth.loading ? <CircularProgress /> : "Send OTP"}
            {/* {otpSent ? "Resend OTP" : ""} */}
          </Button>
        )}

        {/* <Button
          onClick={() => formik.handleSubmit()}
          fullWidth
          variant="contained"
          sx={{ py: "11px" }}
        >
          Login
        </Button> */}
      </div>
    </div>
  );
};

export default SellerLogInForm;

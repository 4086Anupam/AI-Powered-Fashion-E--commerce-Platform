import { useFormik } from "formik";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { customerSignUp, sendLogInSignupOtp } from "../../../State/AuthSlice";
import { Button, CircularProgress, TextField } from "@mui/material";

const Registerform = () => {
  const dispatch = useAppDispatch();
  const [otpSent, setOtpSent] = useState(false);
  const auth = useAppSelector((state) => state.auth);

  // const [valid, setValid] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      fullName: "",
      mobile: "",
    },
    onSubmit: (values) => {
      console.log("Login form data:", values);
      dispatch(customerSignUp(values));
    },
  });

  const handleSendOtp = async () => {
    dispatch(
      sendLogInSignupOtp({
        email: formik.values.email,
        role: "ROLE_CUSTOMER",
      })
    );
  };
  return (
    <div>
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
        Register Yourself
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        {/* Email Field */}
        <TextField
          fullWidth
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          name="fullName"
          label="Full Name"
          type="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <TextField
          fullWidth
          name="mobile"
          label="Mobile"
          type="mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />

        {/* OTP Field (only show after OTP sent) */}
        {auth.otpSent && (
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              Enter OTP sent to your email
            </p>
            <TextField
              fullWidth
              name="otp"
              label="OTP"
              type="text"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-4">
          {auth.otpSent ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                py: "10px",
                textTransform: "none",
                fontWeight: 600,
                backgroundColor: "#2563eb",
                "&:hover": { backgroundColor: "#1e40af" },
              }}
            >
              Signup
            </Button>
          ) : (
            <Button
              onClick={handleSendOtp}
              fullWidth
              variant="outlined"
              sx={{
                py: "10px",
                textTransform: "none",
                fontWeight: 600,
                borderColor: "#2563eb",
                color: "#2563eb",
                "&:hover": { borderColor: "#1e40af", color: "#1e40af" },
              }}
            >
              {auth.loading ? <CircularProgress /> : "Send OTP"}
              {/* {otpSent ? "Resend OTP" : "Send OTP"} */}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Registerform;

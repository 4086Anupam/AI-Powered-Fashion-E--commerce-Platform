import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { useFormik } from "formik";
import { Button, CircularProgress, TextField } from "@mui/material";
import { customerLogin, sendLogInSignupOtp } from "../../../State/AuthSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [otpSent, setOtpSent] = useState(false);
  const auth = useAppSelector((state) => state.auth);
  // const [valid, setValid] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("Login form data:", values);
      // ✅ You can dispatch login OTP verification here
      dispatch(customerLogin(values))
        .unwrap()
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log("Login failed:", error);
        });
    },
  });

  const handleSendOtp = async () => {
    try {
      if (!formik.values.email) {
        alert("Please enter your email before requesting OTP");
        return;
      }

      await dispatch(
        sendLogInSignupOtp({
          email: formik.values.email,
          role: "ROLE_CUSTOMER",
        })
      );

      setOtpSent(true);
      console.log("OTP sent successfully to:", formik.values.email);
    } catch (error) {
      console.error("Failed to send OTP:", error);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-3">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
        Login to Continue
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
              Login
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
              {/* {otpSent ? "Resend OTP" : ""} */}
            </Button>
          )}

          {/* <Button
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
            Login
          </Button> */}
        </div>
      </form>
    </div>
  );
};

export default Login;

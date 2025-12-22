import React, { useState } from "react";
import Login from "./Login";
import Registerform from "./Registerform";
import { Button } from "@mui/material";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Banner Image */}
        <img
          className="w-full h-48 object-cover rounded-t-2xl"
          src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-118763.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Shopping"
        />

        {/* Form Section */}
        <div className="p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {isLogin ? "Welcome Back 👋" : "Create an Account ✨"}
          </h2>
          <p className="text-gray-500 text-sm mb-6 text-center">
            {isLogin
              ? "Log in to continue your shopping experience."
              : "Join us and start your shopping journey!"}
          </p>

          {/* Form */}
          <div className="w-full">{isLogin ? <Login /> : <Registerform />}</div>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Button
              size="small"
              variant="text"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                color: "#2563eb",
                "&:hover": { color: "#1e40af" },
              }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Create Account" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

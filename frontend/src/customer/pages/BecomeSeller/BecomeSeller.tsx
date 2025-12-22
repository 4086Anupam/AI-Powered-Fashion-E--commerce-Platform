// import React, { useState } from "react";
// import SellerAccountForm from "./SellerAccountForm";
// import SellerLogInForm from "./SellerLogInForm";
// import { Button } from "@mui/material";

// const BecomeSeller = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const handleShowPage = () => {
//     setIsLogin(!isLogin);
//   };
//   return (
//     <div className=" grid md:gap-10 grid-cols-3 min-h-screen">
//       <section className=" lg:col-span-1 md:col-span-2 col-span-1 p-10 shadow-lg rounded-b-md">
//         {isLogin ? <SellerAccountForm /> : <SellerLogInForm />}

//         <div className=" mt10 space-y-2">
//           <h1 className=" text-center text-sm font-medium">have account</h1>
//           <Button
//             onClick={handleShowPage}
//             fullWidth
//             variant="outlined"
//             sx={{ py: "11px" }}
//           >
//             {isLogin ? "Login" : "Register"}
//           </Button>
//         </div>
//       </section>
//       <section className="hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center">
//         <div className="lg:w-[70%] px-5 space-y-10">
//           <div className="space-y-2 font-bold text-center">
//             <p className="text-2x1">Join the Marketplace Revolution</p>
//             <p className="text-lg text-primary-color">Boost your sales today</p>
//           </div>
//           <img
//             className=" lg:min-h-100"
//             src="https://i.pinimg.com/474x/f2/cf/e4/f2cfe47d9ffff007030bcb363ac2ef23.jpg"
//             alt=""
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BecomeSeller;

import React, { useState } from "react";
import SellerAccountForm from "./SellerAccountForm";
import SellerLogInForm from "./SellerLogInForm";
import { Button } from "@mui/material";

const BecomeSeller = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleShowPage = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen bg-gray-50">
      {/* LEFT FORM SECTION */}
      <section className="col-span-1 md:col-span-2 lg:col-span-1 bg-white shadow-xl rounded-xl p-8 md:p-10 flex flex-col justify-center">
        <div className="space-y-8">
          {isLogin ? <SellerAccountForm /> : <SellerLogInForm />}

          <div className="mt-10 space-y-3">
            <h1 className="text-center text-sm font-medium text-gray-600">
              {isLogin ? "Already have an account?" : "Don't have an account?"}
            </h1>
            <Button
              onClick={handleShowPage}
              fullWidth
              variant="outlined"
              sx={{
                py: "12px",
                borderRadius: "10px",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
            >
              {isLogin ? "Login" : "Register"}
            </Button>
          </div>
        </div>
      </section>

      {/* RIGHT IMAGE / INFO SECTION */}
      <section className="hidden md:flex md:col-span-1 lg:col-span-2 justify-center items-center bg-gradient-to-br from-pink-100 to-pink-50">
        <div className="lg:w-[70%] w-[85%] px-5 space-y-10 text-center">
          <div className="space-y-2 font-bold">
            <p className="text-3xl md:text-4xl text-gray-800">
              Join the Marketplace Revolution
            </p>
            <p className="text-lg md:text-xl text-pink-600 font-semibold">
              Boost your sales today
            </p>
          </div>
          <img
            className="w-full max-h-[420px] object-contain rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
            src="https://i.pinimg.com/474x/f2/cf/e4/f2cfe47d9ffff007030bcb363ac2ef23.jpg"
            alt="Become a Seller"
          />
        </div>
      </section>
    </div>
  );
};

export default BecomeSeller;

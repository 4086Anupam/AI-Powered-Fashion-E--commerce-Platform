// import {
//   Avatar,
//   Box,
//   Button,
//   IconButton,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import {
//   AddShoppingCart,
//   FavoriteBorder,
//   Storefront,
// } from "@mui/icons-material";
// import CategorySheet from "./CategorySheet";
// // import { mainCategory } from "../../../data/category/mainCategory";
// import { useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../../State/Store";
// import { fetchUserProfile } from "../../../State/AuthSlice";
// // import { GLOBAL_ROLE } from "../../../Config/hello";
// import { mainCategory } from "../../../data/category/mainCategory";

// const Navbar = () => {
//   const theme = useTheme();
//   const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
//   const [selectedCategory, setSelectedCategory] = useState("men");
//   const [showCategorySheet, setShowCategorySheet] = useState(false);
//   const auth = useAppSelector((state) => state.auth);
//   const seller = useAppSelector((state) => state.seller);
//   console.log(
//     "seller or customer name",
//     auth.user?.fullName || seller.profile?.sellerName
//   );
//   // console.log("name", auth.user?.fullName);
//   // console.log("jwt", localStorage.getItem("jwt") || "");
//   // console.log("Role", localStorage.getItem("role") || "");
//   // const dispatch = useAppDispatch();
//   // useEffect(() => {
//   //   dispatch(fetchUserProfile({ jwt: localStorage.getItem("jwt") || "" }));
//   // }, []);

//   const navigate = useNavigate();

//   return (
//     <Box className="sticky top-0 left-0 right-0 bg-white" sx={{ zIndex: 2 }}>
//       <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
//         {/* Left Section */}
//         <div className="flex items-center gap-9">
//           <div className="flex items-center gap-2">
//             {!isLarge && (
//               <IconButton>
//                 <MenuIcon />
//               </IconButton>
//             )}
//             <h1
//               onClick={() => navigate("/")}
//               className="logo cursor-pointer text-lg md:text-2xl  text-primary-color"
//             >
//               Stylence Bazzar
//             </h1>
//           </div>

//           {/* Main Categories */}
//           <ul className=" pl-20 flex items-center  font-medium text-gray-800 ">
//             {mainCategory.map((item) => (
//               <li
//                 key={item.categoryId}
//                 onMouseEnter={() => {
//                   setSelectedCategory(item.categoryId);
//                   setShowCategorySheet(true);
//                 }}
//                 onMouseLeave={() => {
//                   setShowCategorySheet(false);
//                 }}
//                 className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center cursor-pointer "
//               >
//                 {item.name}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div className="flex gap-1 lg:gap-6 items-center">
//           <IconButton>
//             <SearchIcon />
//           </IconButton>
//           {auth.isLoggedIn ? (
//             <Button
//               onClick={() => navigate("/account/orders")}
//               className="flex items-center gap-2"
//             >
//               <Avatar
//                 sx={{ width: 29, height: 29 }}
//                 src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24288118/2363A_0070_v0550.1080K.jpg?quality=90&strip=all&crop=20.861878453039%2C0%2C58.276243093923%2C100&w=2400"
//               />
//               <h1 className="font-semibold hidden lg:block">
//                 {auth.user?.fullName || seller.profile?.sellerName}
//               </h1>
//             </Button>
//           ) : (
//             <Button onClick={() => navigate("/login")} variant="contained">
//               Login
//             </Button>
//           )}
//           <IconButton onClick={() => navigate("/wishlist")}>
//             <FavoriteBorder sx={{ fontSize: 29 }} />
//           </IconButton>
//           <IconButton onClick={() => navigate("/cart")}>
//             <AddShoppingCart className="text-gray-700" sx={{ fontSize: 29 }} />
//           </IconButton>
//           {isLarge && (
//             <Button
//               onClick={() => navigate("/become-seller")}
//               variant="outlined"
//               startIcon={<Storefront />}
//             >
//               Become Seller
//             </Button>
//           )}
//         </div>
//       </div>

//       {/* Category Sheet */}
//       {showCategorySheet && (
//         <div
//           onMouseEnter={() => setShowCategorySheet(true)}
//           onMouseLeave={() => setShowCategorySheet(false)}
//           className="categorySheet absolute top-[4.41rem] left-20 right-20 border"
//         >
//           <CategorySheet
//             selectedCategory={selectedCategory} // ✅ fixed prop name
//             // setShowSheet={setShowCategorySheet}  // optional if your sheet needs to hide on hover out
//           />
//         </div>
//       )}
//     </Box>
//   );
// };

// export default Navbar;

import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AddShoppingCart,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";
import CategorySheet from "./CategorySheet";
// import { mainCategory } from "../../../data/category/mainCategory";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchUserProfile } from "../../../State/AuthSlice";
// import { GLOBAL_ROLE } from "../../../Config/hello";
import { mainCategory } from "../../../data/category/mainCategory";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const auth = useAppSelector((state) => state.auth);
  const seller = useAppSelector((state) => state.seller);
  console.log(
    "seller or customer name",
    auth.user?.fullName || seller.profile?.sellerName
  );
  // console.log("name", auth.user?.fullName);
  // console.log("jwt", localStorage.getItem("jwt") || "");
  // console.log("Role", localStorage.getItem("role") || "");
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchUserProfile({ jwt: localStorage.getItem("jwt") || "" }));
  // }, []);

  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  console.log("customer / seller / admin - ", role);
  return (
    <Box className="sticky top-0 left-0 right-0 bg-white" sx={{ zIndex: 2 }}>
      {role === "ROLE_SELLER" ? (
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          {/* Left Section */}
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <h1
                onClick={() => navigate("/")}
                className="logo cursor-pointer text-lg md:text-2xl  text-primary-color"
              >
                Stylence Bazzar
              </h1>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {auth.isLoggedIn ? (
              <Button
                onClick={() => navigate("/seller")}
                className="flex items-center gap-2"
              >
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24288118/2363A_0070_v0550.1080K.jpg?quality=90&strip=all&crop=20.861878453039%2C0%2C58.276243093923%2C100&w=2400"
                />
                <h1 className="font-semibold hidden lg:block">
                  {auth.user?.fullName || seller.profile?.sellerName}
                </h1>
              </Button>
            ) : (
              <Button onClick={() => navigate("/login")} variant="contained">
                Login
              </Button>
            )}
            <IconButton onClick={() => navigate("/wishlist")}>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton onClick={() => navigate("/cart")}>
              <AddShoppingCart
                className="text-gray-700"
                sx={{ fontSize: 29 }}
              />
            </IconButton>
            {isLarge && (
              <Button
                onClick={() => navigate("/become-seller")}
                variant="outlined"
                startIcon={<Storefront />}
              >
                Become Seller
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          {/* Left Section */}
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <h1
                onClick={() => navigate("/")}
                className="logo cursor-pointer text-lg md:text-2xl  text-primary-color"
              >
                Stylence Bazzar
              </h1>
            </div>

            {/* Main Categories */}
            <ul className=" pl-20 flex items-center  font-medium text-gray-800 ">
              {mainCategory.map((item) => (
                <li
                  key={item.categoryId}
                  onMouseEnter={() => {
                    setSelectedCategory(item.categoryId);
                    setShowCategorySheet(true);
                  }}
                  onMouseLeave={() => {
                    setShowCategorySheet(false);
                  }}
                  className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center cursor-pointer "
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {auth.isLoggedIn ? (
              <Button
                onClick={
                  role == "ROLE_CUSTOMER"
                    ? () => navigate("/account/orders")
                    : () => navigate("/admin")
                }
                className="flex items-center gap-2"
              >
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24288118/2363A_0070_v0550.1080K.jpg?quality=90&strip=all&crop=20.861878453039%2C0%2C58.276243093923%2C100&w=2400"
                />
                <h1 className="font-semibold hidden lg:block">
                  {auth.user?.fullName || seller.profile?.sellerName}
                </h1>
              </Button>
            ) : (
              <Button onClick={() => navigate("/login")} variant="contained">
                Login
              </Button>
            )}
            <IconButton onClick={() => navigate("/wishlist")}>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton onClick={() => navigate("/cart")}>
              <AddShoppingCart
                className="text-gray-700"
                sx={{ fontSize: 29 }}
              />
            </IconButton>
            {isLarge && (
              <Button
                onClick={() => navigate("/become-seller")}
                variant="outlined"
                startIcon={<Storefront />}
              >
                Become Seller
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Category Sheet */}
      {showCategorySheet && (
        <div
          onMouseEnter={() => setShowCategorySheet(true)}
          onMouseLeave={() => setShowCategorySheet(false)}
          className="categorySheet absolute top-[4.41rem] left-20 right-20 border"
        >
          <CategorySheet
            selectedCategory={selectedCategory} // ✅ fixed prop name
            // setShowSheet={setShowCategorySheet}  // optional if your sheet needs to hide on hover out
          />
        </div>
      )}
    </Box>
  );
};

export default Navbar;

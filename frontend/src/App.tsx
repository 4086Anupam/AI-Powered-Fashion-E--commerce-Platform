// import React, { useEffect } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { Button, ThemeProvider } from "@mui/material";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import Navbar from "./customer/components/Navbar/Navbar";
// import customeTheme from "./theme/customTheme";
// import Home from "./customer/pages/Home/Home";
// import Product from "./customer/pages/Product/Product";
// import ProductDetails from "./customer/pages/ProductDetails/ProductDetails";
// import Review from "./customer/pages/Review/Review";
// import Cart from "./customer/pages/Cart/Cart";
// import CheckOut from "./customer/pages/CheckOut/CheckUout";
// import Account from "./customer/pages/Accounts/Account";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import BecomeSeller from "./customer/pages/BecomeSeller/BecomeSeller";
// import SellerDashboard from "./seller/pages/SellerDashboard/SellerDashboard";
// import AdminDashboard from "./admin/Pages/DashBoard/AdminDashboard";
// import { fetchProduct } from "./State/fetchProduct";
// import store, { useAppDispatch, useAppSelector } from "./State/Store";
// import { fetchSellerProfile } from "./State/Seller/sellerSlice";
// // import { fetchUserProfile, logout } from "./State/AuthSlice";
// import Auth from "./customer/pages/Auth/Auth";

// function App() {
//   const dispatch = useAppDispatch();
//   // const seller = useAppSelector(store=>store);
//   const seller = useAppSelector((state) => state.seller);
//   // const auth = useAppSelector((state) => state.auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     // fetchProduct();
//     dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
//   }, []);
//   // useEffect(() => {
//   //   // fetchProduct();
//   //   dispatch(fetchUserProfile(auth.jwt || localStorage.getItem("jwt")));
//   // }, [auth.jwt]);
//   return (
//     <ThemeProvider theme={customeTheme}>
//       <div>
//         <Navbar />
//         {/* <Home/> */}
//         {/* <Product/> */}
//         {/* <ProductDetails /> */}
//         {/* <Review /> */}
//         {/* <Cart /> */}
//         {/* <CheckOut /> */}
//         {/* <Account /> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products/:category" element={<Product />} />
//           <Route path="/reviews/:productId" element={<Review />} />
//           <Route
//             path="/product-details/:categoryId/:name/:productId"
//             element={<ProductDetails />}
//           />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<CheckOut />} />
//           <Route path="/account/*" element={<Account />} />
//           <Route path="/become-seller" element={<BecomeSeller />} />
//           <Route path="/seller/*" element={<SellerDashboard />} />
//           <Route path="/admin/*" element={<AdminDashboard />} />
//           <Route path="/login" element={<Auth />} />
//         </Routes>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

// import React, { useEffect } from "react";
// import "./App.css";
// import { ThemeProvider } from "@mui/material";
// import { Route, Routes, useNavigate } from "react-router-dom";

// import Navbar from "./customer/components/Navbar/Navbar";
// import customeTheme from "./theme/customTheme";

// import Home from "./customer/pages/Home/Home";
// import Product from "./customer/pages/Product/Product";
// import ProductDetails from "./customer/pages/ProductDetails/ProductDetails";
// import Review from "./customer/pages/Review/Review";
// import Cart from "./customer/pages/Cart/Cart";
// import CheckOut from "./customer/pages/CheckOut/CheckUout";
// import Account from "./customer/pages/Accounts/Account";
// import BecomeSeller from "./customer/pages/BecomeSeller/BecomeSeller";
// import SellerDashboard from "./seller/pages/SellerDashboard/SellerDashboard";
// import AdminDashboard from "./admin/Pages/DashBoard/AdminDashboard";
// import Auth from "./customer/pages/Auth/Auth";

// import { useAppDispatch, useAppSelector } from "./State/Store";
// import { fetchSellerProfile } from "./State/Seller/sellerSlice";
// import { fetchUserProfile } from "./State/AuthSlice"; // ✅ uncommented
// import Footer from "./customer/components/Footer/Footer";
// import PaymentSuccess from "./customer/pages/PaymentSuccess";
// import WishList from "./customer/pages/WishList/WishList";
// import VerifySeller from "./seller/pages/sellerVerification/VerifySeller";
// // import { GLOBAL_ROLE } from "./Config/hello";

// function App() {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const seller = useAppSelector((state) => state.seller);
//   const auth = useAppSelector((state) => state.auth);

//   // // ✅ Load Seller Profile if logged in as Seller
//   // useEffect(() => {
//   //   const jwt = localStorage.getItem("jwt");
//   //   if (jwt) {
//   //     dispatch(fetchSellerProfile(jwt));
//   //   }
//   // }, [dispatch]);

//   // // ✅ Load Customer/User Profile when JWT changes
//   // useEffect(() => {
//   //   const jwt = auth.jwt || localStorage.getItem("jwt");
//   //   console.log("jwt", auth.jwt || localStorage.getItem("jwt"));
//   //   console.log("role", auth.jwt || localStorage.getItem("role"));
//   //   const role = localStorage.getItem("role");

//   //   // if (jwt && role === "ROLE_SELLER") {
//   //   //   dispatch(fetchUserProfile({ jwt }));
//   //   // } else if (jwt) {
//   //   //   dispatch(fetchUserProfile({ jwt }));
//   //   // }
//   //   if (jwt) {
//   //     dispatch(fetchUserProfile({ jwt })) ||
//   //       dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
//   //   }
//   // }, [dispatch, auth.jwt]);

//   useEffect(() => {
//     const jwt = auth.jwt || localStorage.getItem("jwt");
//     if (jwt) {
//       // localStorage.getItem("role") === "ROLE_SELLER"
//       // if (GLOBAL_ROLE === "SELLER") {
//       // dispatch(fetchSellerProfile(jwt));
//       // }
//       // if (GLOBAL_ROLE === "CUSTOMER") {
//       dispatch(fetchUserProfile({ jwt }));
//       // }
//       // dispatch(fetchUserProfile({ jwt }));
//     }
//   }, [dispatch, auth.jwt]);

//   return (
//     <ThemeProvider theme={customeTheme}>
//       <div>
//         <Navbar />
//         <Routes>
//           {/* --------- Customer Pages --------- */}
//           <Route path="/" element={<Home />} />
//           <Route path="/products/:category" element={<Product />} />
//           <Route
//             path="/product-details/:categoryId/:name/:productId"
//             element={<ProductDetails />}
//           />
//           <Route path="/reviews/:productId" element={<Review />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<CheckOut />} />
//           <Route
//             path="/payment-success/:orderId"
//             element={<PaymentSuccess />}
//           />
//           <Route path="/account/*" element={<Account />} />

//           {/* --------- Seller Pages --------- */}
//           <Route path="/become-seller" element={<BecomeSeller />} />
//           <Route path="/seller/*" element={<SellerDashboard />} />

//           {/* --------- Admin Pages --------- */}
//           <Route path="/admin/*" element={<AdminDashboard />} />

//           {/* --------- Auth --------- */}
//           <Route path="/login" element={<Auth />} />
//           <Route path="/wishlist" element={<WishList />} />
//           <Route path="/verify-seller/:otp" element={<VerifySeller />} />
//         </Routes>
//         <Footer />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Navbar from "./customer/components/Navbar/Navbar";
import customeTheme from "./theme/customTheme";

import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";
import ProductDetails from "./customer/pages/ProductDetails/ProductDetails";
import Review from "./customer/pages/Review/Review";
import Cart from "./customer/pages/Cart/Cart";
import CheckOut from "./customer/pages/CheckOut/CheckUout";
import Account from "./customer/pages/Accounts/Account";
import BecomeSeller from "./customer/pages/BecomeSeller/BecomeSeller";
import SellerDashboard from "./seller/pages/SellerDashboard/SellerDashboard";
import AdminDashboard from "./admin/Pages/DashBoard/AdminDashboard";
import Auth from "./customer/pages/Auth/Auth";

import { useAppDispatch, useAppSelector } from "./State/Store";
import { fetchSellerProfile } from "./State/Seller/sellerSlice";
import { fetchUserProfile } from "./State/AuthSlice";
import Footer from "./customer/components/Footer/Footer";
import PaymentSuccess from "./customer/pages/PaymentSuccess";
import WishList from "./customer/pages/WishList/WishList";
import VerifySeller from "./seller/pages/sellerVerification/VerifySeller";
import { createHomeCategories } from "./State/Customer/customerSlice";
import { homeCategories } from "./data/homeCategories";

function App() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    const jwt = auth.jwt || localStorage.getItem("jwt");
    const role = localStorage.getItem("role"); // saved after login
    console.log("role ", role);

    if (!jwt || !role) return;

    // ✅ Decide which profile to fetch
    if (role === "ROLE_SELLER") {
      dispatch(fetchSellerProfile(jwt));
    } else if (role === "ROLE_CUSTOMER" || role === "ROLE_ADMIN") {
      dispatch(fetchUserProfile({ jwt }));
    }
    dispatch(createHomeCategories(homeCategories));
  }, [dispatch, auth.jwt]);

  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        <Routes>
          {/* --------- Customer Pages --------- */}
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route
            path="/payment-success/:orderId"
            element={<PaymentSuccess />}
          />
          <Route path="/account/*" element={<Account />} />

          {/* --------- Seller Pages --------- */}
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/seller/*" element={<SellerDashboard />} />

          {/* --------- Admin Pages --------- */}
          <Route path="/admin/*" element={<AdminDashboard />} />

          {/* --------- Auth --------- */}
          <Route path="/login" element={<Auth />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/verify-seller/:otp" element={<VerifySeller />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

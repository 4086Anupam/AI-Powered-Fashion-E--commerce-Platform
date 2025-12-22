import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import sellerSlice from "./Seller/sellerSlice";
import sellerProductSlice from "./Seller/SellerProductSlice";
import productSlice from "./Customer/ProductSlice";
import orderSlice from "./Customer/orderSlice";
import cartSlice from "./Customer/CartSlice";
import wishlistSlice from "./Customer/wishlistSlice";
import sellerOrderSlice from "./Seller/sellerOrderSlice";
import transactionSlice from "./Seller/transactionSlice";
import addressSlice from "./Customer/addressSlice";

import authSlice from "./AuthSlice";
import Product from "../customer/pages/Product/Product";
import Cart from "../customer/pages/Cart/Cart";
import Order from "../customer/pages/Accounts/Order";
import homeCategorySlice from "./Admin/adminSlice";
import homeSlice from "./Customer/customerSlice";
import dealsSlice from "./Admin/DealSlice";

const rootReducer = combineReducers({
  // Add your reducers here
  // example: auth: authReducer,
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
  auth: authSlice,
  cart: cartSlice,
  order: orderSlice,
  wishlist: wishlistSlice,
  sellerOrder: sellerOrderSlice,
  sellerTransaction: transactionSlice,
  address: addressSlice,
  admin: homeCategorySlice,
  customer: homeSlice,
  deal: dealsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  // ✅ Don't add thunk manually; it's already included by default
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

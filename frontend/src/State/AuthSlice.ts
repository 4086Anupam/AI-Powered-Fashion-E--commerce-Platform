// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { api } from "../Config/Api";
// import { User } from "../type/userType";
// import { Seller } from "../type/SellerTypes";
// // import { GLOBAL_ROLE, setGlobalRole } from "../Config/hello";

// export const sendLogInSignupOtp = createAsyncThunk(
//   "/auth/sendLogInSignupOtp",
//   async (
//     { email, role }: { email: string; role: string },
//     { rejectWithValue }
//   ) => {
//     try {
//       const response = await api.post("/auth/sent/login-signup-otp", {
//         email,
//         role,
//       });
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data || "Something went wrong");
//     }
//   }
// );

// export const sellerLogin = createAsyncThunk<any, any>(
//   "/auth/sellerLogin",
//   async (loginRequest, { rejectWithValue }) => {
//     try {
//       const response = await api.post("/sellers/login", loginRequest);

//       const { jwt, role } = response.data;
//       localStorage.setItem("jwt", jwt);
//       // localStorage.setItem("role", "ROLE_SELLER");
//       console.log("seller login success  ---- ", response.data);
//       // console.log("jwt-----------------", jwt);
//       console.log("role-----------------", role);
//       //....................................
//       // setGlobalRole("SELLER");
//       // console.log("Global role = ", GLOBAL_ROLE);
//       return { jwt, role };
//     } catch (error: any) {
//       const message =
//         error.response?.data?.message ||
//         error.response?.data ||
//         "Something went wrong";
//       alert(message);
//       return rejectWithValue(error.response?.data || "Something went wrong");
//     }
//   }
// );

// export const customerLogin = createAsyncThunk<any, any>(
//   "/auth/customerLogin",
//   async (loginRequest, { rejectWithValue }) => {
//     try {
//       const response = await api.post("/auth/signin", loginRequest);
//       console.log("signup success ", response.data);
//       const jwt = response.data.jwt;
//       localStorage.setItem("jwt", jwt);
//       // localStorage.setItem("role", "ROLE_CUSTOMER");
//       console.log("customer login success  ---- ", response);
//       console.log("jwt-----------------", jwt);
//       // console.log("role-----------------", role);
//       //....................................
//       // setGlobalRole("CUSTOMER");
//       // console.log("Global role = ", GLOBAL_ROLE);
//       return response.data; // ✅ Must return for reducers to receive payload
//     } catch (error: any) {
//       console.log("error ---- ", error);
//       return rejectWithValue(error.response?.data || "Something went wrong");
//     }
//   }
// );

// export const customerSignUp = createAsyncThunk<any, any>(
//   "/auth/customerSignUp",
//   async (signupRequest, { rejectWithValue }) => {
//     try {
//       const response = await api.post("/auth/signup", signupRequest);

//       const { jwt, role } = response.data;
//       localStorage.setItem("jwt", jwt);
//       // localStorage.setItem("role", role);
//       console.log("response ---- ", response);
//       return { jwt, role }; // ✅ Fix: return correct payload
//     } catch (error: any) {
//       console.log("error ---- ", error);
//       return rejectWithValue(error.response?.data || "Something went wrong");
//     }
//   }
// );

// export const fetchUserProfile = createAsyncThunk<any, { jwt: string }>(
//   "/auth/fetchUserProfile",
//   async ({ jwt }, { rejectWithValue }) => {
//     try {
//       const response = await api.get("/users/profile", {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       });
//       console.log("User fetched successfully", response.data);
//       return response.data;
//     } catch (error: any) {
//       console.error("error-----", error);
//       return rejectWithValue(error.response?.data || "Something went wrong");
//     }
//   }
// );

// export const logout = createAsyncThunk(
//   "/auth/logout",
//   async (_, { rejectWithValue }) => {
//     try {
//       localStorage.clear();
//       console.error("Log out success-----");
//       return true;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// interface AuthState {
//   jwt: string | null;
//   otpSent: boolean;
//   isLoggedIn: boolean;
//   user: User | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   jwt: localStorage.getItem("jwt"),
//   otpSent: false,
//   isLoggedIn: !!localStorage.getItem("jwt"),
//   user: null,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     /* --- OTP --- */
//     builder.addCase(sendLogInSignupOtp.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(sendLogInSignupOtp.fulfilled, (state) => {
//       state.loading = false;
//       state.otpSent = true;
//     });
//     builder.addCase(sendLogInSignupOtp.rejected, (state, action) => {
//       state.loading = false;
//     });
//     builder.addCase(customerLogin.fulfilled, (state, action) => {
//       state.loading = false;
//       state.jwt = action.payload.jwt;
//       state.isLoggedIn = true;
//     });
//     builder.addCase(customerSignUp.fulfilled, (state, action) => {
//       state.jwt = action.payload.jwt;
//       state.isLoggedIn = true;
//     });
//     builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//     });
//     builder.addCase(logout.fulfilled, (state) => {
//       state.jwt = null;
//       state.user = null;
//       state.isLoggedIn = false;
//     });
//     builder.addCase(sellerLogin.fulfilled, (state, action) => {
//       state.loading = false;
//       state.jwt = action.payload.jwt;
//       state.isLoggedIn = true;
//     });
//   },
// });

// export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../Config/Api";
import { User } from "../type/userType";
import { Seller } from "../type/SellerTypes";

// ===============================
// 🔹 Thunks
// ===============================

// Send OTP for login/signup
export const sendLogInSignupOtp = createAsyncThunk(
  "/auth/sendLogInSignupOtp",
  async (
    { email, role }: { email: string; role: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post("/auth/sent/login-signup-otp", {
        email,
        role,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// ✅ Seller Login
export const sellerLogin = createAsyncThunk<any, any>(
  "/auth/sellerLogin",
  async (loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/sellers/login", loginRequest);
      const { jwt, role } = response.data;

      // ✅ Store auth info locally
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("role", role || "ROLE_SELLER");

      console.log("seller login success ---- ", response.data);
      return { jwt, role };
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.response?.data ||
        "Something went wrong";
      alert(message);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// ✅ Customer Login
export const customerLogin = createAsyncThunk<any, any>(
  "/auth/customerLogin",
  async (loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signin", loginRequest);
      const { jwt, role } = response.data;

      // ✅ Save JWT + Role locally
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("role", role || "ROLE_CUSTOMER");

      console.log("customer login success ---- ", response.data);
      return { jwt, role };
    } catch (error: any) {
      console.log("error ---- ", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// ✅ Customer Signup
export const customerSignUp = createAsyncThunk<any, any>(
  "/auth/customerSignUp",
  async (signupRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signup", signupRequest);
      const { jwt, role } = response.data;

      // ✅ Save JWT + Role locally
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("role", role || "ROLE_CUSTOMER");

      console.log("signup success ---- ", response.data);
      return { jwt, role };
    } catch (error: any) {
      console.log("error ---- ", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// ✅ Fetch User Profile (for customers)
export const fetchUserProfile = createAsyncThunk<any, { jwt: string }>(
  "/auth/fetchUserProfile",
  async ({ jwt }, { rejectWithValue }) => {
    try {
      const response = await api.get("/users/profile", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("User fetched successfully", response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching user profile:", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// ✅ Logout
export const logout = createAsyncThunk(
  "/auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.clear();
      console.log("Logout successful");
      return true;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ===============================
// 🔹 Slice
// ===============================

interface AuthState {
  jwt: string | null;
  otpSent: boolean;
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  jwt: localStorage.getItem("jwt"),
  otpSent: false,
  isLoggedIn: !!localStorage.getItem("jwt"),
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // OTP
      .addCase(sendLogInSignupOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendLogInSignupOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
      })
      .addCase(sendLogInSignupOtp.rejected, (state) => {
        state.loading = false;
      })

      // Customer Login
      .addCase(customerLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.isLoggedIn = true;
      })

      // Customer Signup
      .addCase(customerSignUp.fulfilled, (state, action) => {
        state.jwt = action.payload.jwt;
        state.isLoggedIn = true;
      })

      // Fetch Profile
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })

      // Seller Login
      .addCase(sellerLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.isLoggedIn = true;
      })

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.jwt = null;
        state.user = null;
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { api } from "../../Config/Api";
// // import { report } from "process";

// export const fetchSellerProfile = createAsyncThunk(
//   "/sellers/fetchSellerProfile",
//   async (jwt: string, { rejectWithValue }) => {
//     try {
//       const response = await api.get("/sellers/profile", {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       });
//       console.log("fetch seller profile", response.data);
//       return response.data;
//     } catch (error) {
//       console.log("error-----", error);
//     }
//   }
// );

// interface SellerState {
//   sellers: any[];
//   selectedSeller: any;
//   profile: any;
//   report: any;
//   loading: Boolean;
//   error: any;
// }

// const initialState: SellerState = {
//   sellers: [],
//   selectedSeller: null,
//   profile: null,
//   report: null,
//   loading: false,
//   error: null,
// };

// const sellerSlice = createSlice({
//   name: "sellers",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSellerProfile.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchSellerProfile.fulfilled, (state, action) => {
//         state.loading = false;
//         state.profile = action.payload;
//       })
//       .addCase(fetchSellerProfile.rejected, (state, action) => {
//         state.loading = false;
//         state.profile = action.payload;
//       });
//   },
// });

// export default sellerSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { api } from "../../Config/Api";
// import { Seller } from "../../type/SellerTypes";
// // import { report } from "process";

// export const fetchSellerProfile = createAsyncThunk(
//   "/sellers/fetchSellerProfile",
//   async (jwt: string, { rejectWithValue }) => {
//     try {
//       const response = await api.get("/sellers/profile", {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       });
//       console.log("fetch seller profile", response.data);
//       return response.data;
//       // return response.data as Seller;
//     } catch (error) {
//       console.log("error-----", error);
//     }
//   }
// );

// // sellerSlice.ts (add below existing code)

// export const createSeller = createAsyncThunk(
//   "/sellers/createSeller",
//   async (sellerData: any, { rejectWithValue }) => {
//     try {
//       const response = await api.post("/sellers", sellerData);
//       console.log("Seller created successfully:", response.data);
//       return response.data;
//     } catch (error: any) {
//       console.log("Create Seller Error: ", error);
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// interface SellerState {
//   sellers: any[];
//   selectedSeller: any;
//   profile: Seller | null;
//   report: any;
//   loading: Boolean;
//   error: any;
// }

// const initialState: SellerState = {
//   sellers: [],
//   selectedSeller: null,
//   profile: null,
//   report: null,
//   loading: false,
//   error: null,
// };

// const sellerSlice = createSlice({
//   name: "sellers",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSellerProfile.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchSellerProfile.fulfilled, (state, action) => {
//         state.loading = false;
//         state.profile = action.payload;
//       })
//       .addCase(fetchSellerProfile.rejected, (state, action) => {
//         state.loading = false;
//         state.profile = action.payload;
//       });
//     builder
//       .addCase(createSeller.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(createSeller.fulfilled, (state, action) => {
//         state.loading = false;
//         state.selectedSeller = action.payload;
//       })
//       .addCase(createSeller.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default sellerSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import { Seller } from "../../type/SellerTypes";

// ✅ Fetch Seller Profile
export const fetchSellerProfile = createAsyncThunk<Seller, string>(
  "/sellers/fetchSellerProfile",
  async (jwt: string, { rejectWithValue }) => {
    try {
      const response = await api.get("/sellers/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("fetch seller profile", response.data);
      return response.data as Seller;
    } catch (error: any) {
      console.log("error-----", error);
      return rejectWithValue(error.response?.data || "Failed to fetch profile");
    }
  }
);

// ✅ Create Seller
export const createSeller = createAsyncThunk<Seller, any>(
  "/sellers/createSeller",
  async (sellerData: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/sellers", sellerData);
      console.log("Seller created successfully:", response.data);
      return response.data as Seller;
    } catch (error: any) {
      console.log("Create Seller Error: ", error);
      return rejectWithValue(error.response.data);
    }
  }
);

interface SellerState {
  sellers: Seller[];
  selectedSeller: Seller | null;
  profile: Seller | null;
  report: any;
  loading: boolean;
  error: any;
}

const initialState: SellerState = {
  sellers: [],
  selectedSeller: null,
  profile: null,
  report: null,
  loading: false,
  error: null,
};

const sellerSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ✅ Fetch Seller Profile Cases
    builder
      .addCase(fetchSellerProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSellerProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(fetchSellerProfile.rejected, (state, action) => {
        state.loading = false;
        state.profile = null;
        state.error = action.payload;
      });

    // ✅ Create Seller Cases
    builder
      .addCase(createSeller.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSeller.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedSeller = action.payload;
        state.error = null;
      })
      .addCase(createSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default sellerSlice.reducer;

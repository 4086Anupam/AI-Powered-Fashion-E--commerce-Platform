import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import { Deal, DealsState } from "../../type/dealTypes"; // ✅ Use your types file

// ✅ Initial state
const initialState: DealsState = {
  deals: [],
  loading: false,
  error: null,
  dealCreated: false,
  dealUpdated: false,
};

// ✅ Create a new deal
export const createDeal = createAsyncThunk(
  "deals/createDeal",
  async (deal: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/admin/deals", deal, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("✅ Created deal:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Error creating deal:", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to create deal"
      );
    }
  }
);

// ✅ Fetch all deals
export const getAllDeals = createAsyncThunk<Deal[]>(
  "deals/getAllDeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/admin/deals", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("✅ All deals fetched:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Error fetching deals:", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch deals"
      );
    }
  }
);

// ✅ Slice definition
const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔹 Create deal
      .addCase(createDeal.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.dealCreated = false;
      })
      .addCase(createDeal.fulfilled, (state, action) => {
        state.loading = false;
        state.dealCreated = true;
        state.deals.push(action.payload);
      })
      .addCase(createDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to create deal";
      })

      // 🔹 Get all deals
      .addCase(getAllDeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllDeals.fulfilled, (state, action) => {
        state.loading = false;
        state.deals = action.payload;
      })
      .addCase(getAllDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to fetch deals";
      });
  },
});

export default dealsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import { HomeCategory, HomeData } from "../../type/homeCategoryTypes";

// ✅ Async thunk to create home categories
export const createHomeCategories = createAsyncThunk<HomeData, HomeCategory[]>(
  "home/createHomeCategories",
  async (homeCategories, { rejectWithValue }) => {
    try {
      const response = await api.post("/home/categories", homeCategories);
      console.log("✅ Home categories created:", response.data);
      return response.data; // Returns HomeData
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to create home categories";
      console.error("❌ Error creating home categories:", errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// ✅ Define HomeState interface
interface HomeState {
  homePageData: HomeData | null;
  homeCategories: HomeCategory[];
  loading: boolean;
  error: string | null;
}

// ✅ Initial state
const initialState: HomeState = {
  homePageData: null,
  homeCategories: [],
  loading: false,
  error: null,
};

// ✅ Create slice
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Pending
      .addCase(createHomeCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Fulfilled
      .addCase(createHomeCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.homePageData = action.payload; // ✅ HomeData returned from API
      })
      // Rejected
      .addCase(createHomeCategories.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) ||
          action.error.message ||
          "Failed to create home categories";
      });
  },
});

export default homeSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import { HomeCategory } from "../../type/homeCategoryTypes";

const API_URL = "/admin";

// ✅ Thunk to update home category
export const updateHomeCategory = createAsyncThunk(
  "homeCategory/updateHomeCategory",
  async (
    { id, data }: { id: number; data: HomeCategory },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.patch(`${API_URL}/home-category/${id}`, data);
      console.log("Category updated:", response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ||
          "An error occurred while updating the category."
      );
    }
  }
);

// ✅ Thunk to fetch all home categories
export const fetchHomeCategories = createAsyncThunk<HomeCategory[], void>(
  "homeCategory/fetchHomeCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/home-category`);
      console.log("Categories:", response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch categories"
      );
    }
  }
);

// ✅ State interface
interface HomeCategoryState {
  categories: HomeCategory[];
  loading: boolean;
  error: string | null;
  categoryUpdated: boolean;
}

// ✅ Initial state
const initialState: HomeCategoryState = {
  categories: [],
  loading: false,
  error: null,
  categoryUpdated: false,
};

// ✅ Slice
const homeCategorySlice = createSlice({
  name: "homeCategory",
  initialState,
  reducers: {
    resetCategoryUpdate(state) {
      state.categoryUpdated = false;
    },
  },
  extraReducers: (builder) => {
    // 🔹 Update category
    builder
      .addCase(updateHomeCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.categoryUpdated = false;
      })
      .addCase(updateHomeCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryUpdated = true;
        const index = state.categories.findIndex(
          (category) => category.id === action.payload.id
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        } else {
          state.categories.push(action.payload);
        }
      })
      .addCase(updateHomeCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // 🔹 Fetch categories
    builder
      .addCase(fetchHomeCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.categoryUpdated = false;
      })
      .addCase(fetchHomeCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchHomeCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetCategoryUpdate } = homeCategorySlice.actions;
export default homeCategorySlice.reducer;

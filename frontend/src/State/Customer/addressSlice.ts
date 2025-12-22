import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";

// ----------------------
// Types
// ----------------------
export interface Address {
  id?: number;
  name: string;
  locality: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  mobile: string;
}

export interface AddressState {
  addresses: Address[];
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}

const initialState: AddressState = {
  addresses: [],
  loading: false,
  error: null,
  successMessage: null,
};

// ----------------------
// Async Thunks
// ----------------------

// ✅ Get all addresses
export const getAllAddresses = createAsyncThunk<Address[], string>(
  "address/getAll",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/addresses", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("All Addresses .........", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error in getting all address ", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch addresses"
      );
    }
  }
);

// ✅ Add new address
export const addAddress = createAsyncThunk<
  Address,
  { jwt: string; address: Address }
>("address/add", async ({ jwt, address }, { rejectWithValue }) => {
  try {
    const response = await api.post("/api/addresses", address, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    console.log("Success add addresss", response.data);
    return response.data;
  } catch (error: any) {
    console.log("error in adding address ", error);
    return rejectWithValue(
      error.response?.data?.message || "Failed to add address"
    );
  }
});

// ✅ Delete address
export const deleteAddress = createAsyncThunk<
  number,
  { jwt: string; addressId: number }
>("address/delete", async ({ jwt, addressId }, { rejectWithValue }) => {
  try {
    await api.delete(`/api/addresses/${addressId}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    console.log("Deleted", addressId);
    return addressId; // Return deleted ID for updating state
  } catch (error: any) {
    console.log("deletion update address error ", error);
    return rejectWithValue(
      error.response?.data?.message || "Failed to delete address"
    );
  }
});

// ✅ Update address
export const updateAddress = createAsyncThunk<
  Address,
  { jwt: string; addressId: number; updatedData: Address }
>(
  "address/update",
  async ({ jwt, addressId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/api/addresses/${addressId}`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      console.log("updated address ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("uspdate address  error", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to update address"
      );
    }
  }
);

// ----------------------
// Slice
// ----------------------
const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    clearAddressState: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    // GET ALL
    builder
      .addCase(getAllAddresses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload;
      })
      .addCase(getAllAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ADD
    builder
      .addCase(addAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses.push(action.payload);
        state.successMessage = "Address added successfully!";
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // DELETE
    builder
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = state.addresses.filter(
          (a) => a.id !== action.payload
        );
        state.successMessage = "Address deleted successfully!";
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // UPDATE
    builder
      .addCase(updateAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = state.addresses.map((a) =>
          a.id === action.payload.id ? action.payload : a
        );
        state.successMessage = "Address updated successfully!";
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// ----------------------
// Exports
// ----------------------
export const { clearAddressState } = addressSlice.actions;
export default addressSlice.reducer;

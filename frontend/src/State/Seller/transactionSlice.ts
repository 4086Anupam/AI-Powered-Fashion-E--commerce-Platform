import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Transaction } from "../../type/TransactionType";
import { api } from "../../Config/Api";

// Interface
interface TransactionState {
  transactions: Transaction[];
  transaction: Transaction | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: TransactionState = {
  transactions: [],
  transaction: null,
  loading: false,
  error: null,
};

// Thunks
export const fetchTransactionsBySeller = createAsyncThunk<
  Transaction[],
  string,
  { rejectValue: string }
>(
  "transactions/fetchTransactionsBySeller",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get<Transaction[]>("/api/transaction/seller", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("fetchTransactionsBySeller", response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("Failed to fetch transactions");
    }
  }
);

export const fetchAllTransactions = createAsyncThunk<
  Transaction[],
  void,
  { rejectValue: string }
>("transactions/fetchAllTransactions", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<Transaction[]>("/api/transaction");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue("Failed to fetch all transactions");
  }
});

// Slice
const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ---- fetchTransactionsBySeller ----
      .addCase(fetchTransactionsBySeller.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactionsBySeller.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactionsBySeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Error fetching seller transactions";
      })

      // ---- fetchAllTransactions ----
      .addCase(fetchAllTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchAllTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Error fetching all transactions";
      });
  },
});

export default transactionSlice.reducer;

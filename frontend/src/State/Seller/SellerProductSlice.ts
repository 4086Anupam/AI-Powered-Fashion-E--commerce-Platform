// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { api } from "../../Config/Api";
// import { Product } from "../../type/ProductTypes";

// export const fetchSellerProduct = createAsyncThunk<Product[], any>(
//   "/sellerProduct/fetchSellerProduct",
//   async (jwt, { rejectWithValue }) => {
//     try {
//       const response = await api.get("/products", {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       });
//       const data = response.data;
//       console.log("Seller Product", data);
//       //   console.log("fetch seller product", response.data);
//       return response.data;
//     } catch (error) {
//       console.log("error-----", error);
//     }
//   }
// );

// export const createProduct = createAsyncThunk<
//   Product,
//   { request: any; jwt: string | null }
// >("/sellerProduct/createProduct", async (args, { rejectWithValue }) => {
//   const { request, jwt } = args;
//   try {
//     const response = await api.post("sellers/product/create", request, {
//       headers: {
//         Authorization: `Bearer ${jwt}`,
//       },
//     });
//     console.log("Product Created ", response.data);
//     return response.data;
//   } catch (error) {
//     console.log("error - - -", error);
//     // throw error;
//   }
// });

// interface SellerProductState {
//   products: Product[];
//   loading: boolean;
//   error: string | null | undefined;
// }

// const initialState: SellerProductState = {
//   products: [],
//   loading: false,
//   error: null,
// };

// const sellerProductSlice = createSlice({
//   name: "sellerProduct",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchSellerProduct.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchSellerProduct.fulfilled, (state, action) => {
//       state.products = action.payload;
//     });
//     builder.addCase(fetchSellerProduct.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
//     });
//     builder.addCase(createProduct.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(createProduct.fulfilled, (state, action) => {
//       state.products.push(action.payload);
//     });
//     builder.addCase(createProduct.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
//     });
//   },
// });

// export default sellerProductSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { api } from "../../Config/Api";
// import { Product } from "../../type/ProductTypes";

// // Fetch seller products
// export const fetchSellerProduct = createAsyncThunk<Product[], string | null>(
//   "/sellerProduct/fetchSellerProduct",
//   async (jwt, { rejectWithValue }) => {
//     try {
//       const response = await api.get("/products", {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       });
//       console.log("Products -------", response.data);
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

// // Create product
// export const createProduct = createAsyncThunk<
//   Product,
//   { request: any; jwt: string | null }
// >(
//   "/sellerProduct/createProduct",
//   async ({ request, jwt }, { rejectWithValue }) => {
//     try {
//       const response = await api.post("/sellers/products/create", request, {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       });
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

// interface SellerProductState {
//   products: Product[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: SellerProductState = {
//   products: [],
//   loading: false,
//   error: null,
// };

// // Slice
// const sellerProductSlice = createSlice({
//   name: "sellerProduct",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSellerProduct.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchSellerProduct.fulfilled, (state, action) => {
//         state.loading = false;
//         state.products = action.payload || [];
//       })
//       .addCase(fetchSellerProduct.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })
//       .addCase(createProduct.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(createProduct.fulfilled, (state, action) => {
//         state.loading = false;
//         if (action.payload) {
//           state.products.push(action.payload);
//         }
//       })
//       .addCase(createProduct.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export default sellerProductSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import { Product } from "../../type/ProductTypes";

// Fetch seller products
export const fetchSellerProduct = createAsyncThunk<any, string | null>(
  "/sellerProduct/fetchSellerProduct",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/sellers/products", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Products API Response:", response.data);
      return response.data; // This includes content[]
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Create product
export const createProduct = createAsyncThunk<
  Product,
  { request: any; jwt: string | null }
>(
  "/sellerProduct/createProduct",
  async ({ request, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.post("/sellers/products/create", request, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

interface SellerProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: SellerProductState = {
  products: [],
  loading: false,
  error: null,
};

const sellerProductSlice = createSlice({
  name: "sellerProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellerProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // .addCase(fetchSellerProduct.fulfilled, (state, action) => {
      //   state.loading = false;

      //   // ✅ unwrap correctly → store only product array
      //   state.products = action.payload?.content || [];
      // })
      .addCase(fetchSellerProduct.fulfilled, (state, action) => {
        state.loading = false;

        // Fix: store the array directly
        state.products = Array.isArray(action.payload)
          ? action.payload
          : action.payload?.content || [];
      })

      .addCase(fetchSellerProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      });
  },
});

export default sellerProductSlice.reducer;

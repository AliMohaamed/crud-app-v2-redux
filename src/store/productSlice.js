import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addNewProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getProductById,
} from "../API/productAPI";

const initialState = {
  products: [],
  errors: null,
  isLoading: false,
};
// middleware
// getAllProducts
export const getAllProductsAction = createAsyncThunk(
  "product/getAllProductsAction",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllProducts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// getProductById
export const getProductByIdAction = createAsyncThunk(
  "product/getProductByIdAction",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getProductById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// delete
export const deleteProductAction = createAsyncThunk(
  "product/deleteProductAction",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteProduct(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// add
export const addProductAction = createAsyncThunk(
  "product/addProductAction",
  async (product, { rejectWithValue }) => {
    try {
      const response = await addNewProduct(product);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// add
export const editProductAction = createAsyncThunk(
  "product/editProductAction",
  async ({ id: productId, formValues: product }, { rejectWithValue }) => {
    try {
      const response = await editProduct(productId, product);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductsAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProductsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProductsAction.rejected, (state, action) => {
      (state.isLoading = false), (state.errors = action.payload.message);
    });
    builder.addCase(deleteProductAction.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id != action.payload.id
      );
    });
    builder.addCase(addProductAction.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(editProductAction.fulfilled, (state, action) => {
      const updatedProduct = action.payload;
      const index = state.products.findIndex((p) => p.id == updatedProduct.id);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    });
  },
});

export const productReducer = productSlice.reducer;
export const productAction = productSlice.actions;

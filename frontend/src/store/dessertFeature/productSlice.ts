
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export interface Product {
  name: string;
  quantity : number;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<{
        name: string;
        quantity: number;
      }>
    ) => {
      state.products.push({name:action.payload.name, quantity:action.payload.quantity});
    },
  },
});

export default ProductSlice.reducer;

export const { addProduct } = ProductSlice.actions;

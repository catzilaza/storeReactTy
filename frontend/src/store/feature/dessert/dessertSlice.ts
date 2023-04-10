import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { DessertProduct } from "../../../datamodels/Products";
import axios from "axios";
import { useQuery } from "react-query";

export interface Product {
  dessert_name: string;
  dessert_image: string;
  dessert_price: number;
  dessert_quantity: number;
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
    addProductToCart: (
      state,
      action: PayloadAction<{
        name: string;
        image: string;
        price: number;
        quantity: number;
      }>
    ) => {
      state.products.push({
        dessert_name: action.payload.name,
        dessert_image: action.payload.image,
        dessert_price: action.payload.price,
        dessert_quantity: action.payload.quantity,
      });
    },
    // getAllProductApi: (state)=>{
    //   const { data }:Product = axios.get("http://localhost:5000/desserts")
    //   return data

    // }
  },
});

export default ProductSlice.reducer;

export const { addProductToCart } = ProductSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { ProductSlice } from "./dessertFeature/productSlice";

export const store=configureStore({
    reducer: {
        product: ProductSlice.reducer
    }
})

//export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

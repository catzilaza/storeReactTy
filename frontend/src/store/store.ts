import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { ProductSlice } from "./feature/dessert/dessertSlice";
import { UserSlice } from "./userFeature/userSlice";
import { CounterSlice } from "./feature/counter/counterSlice";

import { pokemonApi } from "../services/Pokemon/pokemon";

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  product: ProductSlice.reducer,
  user: UserSlice.reducer,
  counter: CounterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

// export const useUserState: () => typeof store.dispatch = useDispatch;

// export const useUserSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

// export type RootState = ReturnType<typeof store.getState>

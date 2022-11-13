import { configureStore } from "@reduxjs/toolkit";
import modalsSliceReducer from "./features/modalsSlice/modalsSlice";
import ProductReducer from "./features/ProductSlice/ProductSlice";
import webSocketSliceReducer from "./features/webSocketSlice/webSocketSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    webSocket: webSocketSliceReducer,
    modalSlice: modalsSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

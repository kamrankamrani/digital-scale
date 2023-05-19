import { configureStore } from "@reduxjs/toolkit";
import modalsSliceReducer from "./features/modalsSlice/modalsSlice";
import pageRenderSliceReducer from "./features/pageRenderSlice/pageRenderSlice";
import ProductReducer from "./features/ProductSlice/ProductSlice";
import webSocketSliceReducer from "./features/webSocketSlice/webSocketSlice";
import ProductArraySlice from "./features/ProductArraySlice/productArraySlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    webSocket: webSocketSliceReducer,
    modalSlice: modalsSliceReducer,
    pageRenderSlice: pageRenderSliceReducer,
    ProductArraySlice: ProductArraySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ScaleResponseType } from "../../Services/Types";

const initialState: ScaleResponseType = {
  title: "",
  weight: "",
  rawPrice: "",
  finalPrice: "",
  off: "",
  imageUrl: "/src/assets/lemon.jpg",
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setScaleResponse(state, action: PayloadAction<ScaleResponseType>) {
      state.finalPrice = action.payload.finalPrice;
      state.imageUrl = action.payload.imageUrl;
      state.off = action.payload.off;
      state.rawPrice = action.payload.rawPrice;
      state.title = action.payload.title;
      state.weight = action.payload.weight;
    },
  },
});

export const { setScaleResponse } = ProductSlice.actions;
export default ProductSlice.reducer;

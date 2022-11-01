import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ScaleResponseType } from "../../Services/Types";

const initialState: ScaleResponseType = {
  url: "",
  raw_price: 0,
  off: 0,
  final_price: 0,
  isDefault: false,
  client: "UI",
  weight: 0,
  title: "",
  isImage: false,
  // imageUrl: "/src/assets/lemon.jpg",
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setScaleResponse(state, action: PayloadAction<ScaleResponseType>) {
      state.final_price = action.payload.final_price;
      state.url = action.payload.url;
      state.off = action.payload.off;
      state.raw_price = action.payload.raw_price;
      state.title = action.payload.title;
      state.weight = action.payload.weight;
      state.isImage = action.payload.isImage;
    },
  },
});

export const { setScaleResponse } = ProductSlice.actions;
export default ProductSlice.reducer;

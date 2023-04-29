import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductDataTypeWithWeight } from "../../Services/Types";

const initialState: ProductDataTypeWithWeight = {
  url: "",
  price: "",
  final_price: "0",
  category: "",
  off: "0",
  vms: "",
  barcode: "",
  title: "",
  weight: "",
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setProductResponse(
      state,
      action: PayloadAction<ProductDataTypeWithWeight>
    ) {
      state.final_price = action.payload.final_price;
      state.url = action.payload.url;
      state.off = action.payload.off;
      state.barcode = action.payload.barcode;
      state.title = action.payload.title;
      state.vms = action.payload.vms;
      state.category = action.payload.category;
      state.price = action.payload.price;
      state.weight = action.payload.weight;
    },
  },
});

export const { setProductResponse } = ProductSlice.actions;
export default ProductSlice.reducer;

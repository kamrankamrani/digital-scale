import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductDataTypeWithWeight } from "../../Services/Types";

const initialState: { prArray: ProductDataTypeWithWeight[] } = {
  prArray: [] as ProductDataTypeWithWeight[],
};

const ProductArraySlice = createSlice({
  name: "ProductArraySlice",
  initialState,
  reducers: {
    setProductArrayResponse(
      state,
      action: PayloadAction<ProductDataTypeWithWeight[]>
    ) {
      state.prArray = action.payload;
    },
  },
});

export const { setProductArrayResponse } = ProductArraySlice.actions;
export default ProductArraySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { pageRenderSliceType } from "../../Services/Types";

const initialState: pageRenderSliceType = {
  disableAlterButton: true,
  disableBuyButton: true,
  loadingState: true,
};

const pageRenderSlice = createSlice({
  name: "pageRenderSlice",
  initialState,
  reducers: {
    setDisableBuyButtonState(state, action: PayloadAction<boolean>) {
      state.disableBuyButton = action.payload;
    },
    setDisableAlterButtonState(state, action: PayloadAction<boolean>) {
      state.disableAlterButton = action.payload;
    },
    setPageLoadingState(state, action: PayloadAction<boolean>) {
      state.loadingState = action.payload;
    },
  },
});

export const {
  setDisableBuyButtonState,
  setDisableAlterButtonState,
  setPageLoadingState,
} = pageRenderSlice.actions;
export default pageRenderSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { pageRenderSliceType } from "../../Services/Types";

const initialState: pageRenderSliceType = {
  disableAlterButton: true,
  disableBuyButton: true,
  loadingState: false,
  searchModalOpen: false,
  loadingBuyButton: false,
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
    setSearchModalOpen(state, action: PayloadAction<boolean>) {
      state.searchModalOpen = action.payload;
    },
    setLoadingBuyButton(state, action: PayloadAction<boolean>) {
      state.loadingBuyButton = action.payload;
    },
  },
});

export const {
  setDisableBuyButtonState,
  setDisableAlterButtonState,
  setPageLoadingState,
  setSearchModalOpen,
  setLoadingBuyButton,
} = pageRenderSlice.actions;
export default pageRenderSlice.reducer;

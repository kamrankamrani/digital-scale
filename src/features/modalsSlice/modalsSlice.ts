import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isSideMenuOpen: false,
  isAlterItemsModalOpen: false,
};

const modalsSlice = createSlice({
  name: "modalsSlice",
  initialState,
  reducers: {
    setSideMenuOpen(state, action: PayloadAction<boolean>) {
      state.isSideMenuOpen = action.payload;
    },
    setAlterImagesModalOpen(state, action: PayloadAction<boolean>) {
      state.isAlterItemsModalOpen = action.payload;
    },
  },
});

export const { setSideMenuOpen, setAlterImagesModalOpen } = modalsSlice.actions;
export default modalsSlice.reducer;

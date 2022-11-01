import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WebSocketType } from "../../Services/Types";

const initialState: WebSocketType = {
  socketUrl: "ws://127.0.0.1:4000",
  connectionStatus: -1,
};

const webSocketSlice = createSlice({
  name: "webSocketSlice",
  initialState,
  reducers: {
    setWebSocketStatus(state, action: PayloadAction<number>) {
      state.connectionStatus = action.payload;
    },
  },
});

export default webSocketSlice.reducer;
export const { setWebSocketStatus } = webSocketSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WebSocketType, wsSendMessageType } from "../../Services/Types";

const initialState: WebSocketType = {
  socketUrl: "ws://localhost:4000",
  connectionStatus: -1,
  wsSendMessage: {
    isMessage: false,
    body: {
      client: "",
      message: "",
    },
  },
};

const webSocketSlice = createSlice({
  name: "webSocketSlice",
  initialState,
  reducers: {
    setWebSocketStatus(state, action: PayloadAction<number>) {
      state.connectionStatus = action.payload;
    },
    setWsSendMessage(state, action: PayloadAction<wsSendMessageType>) {
      state.wsSendMessage = action.payload;
    },
  },
});

export default webSocketSlice.reducer;
export const { setWebSocketStatus, setWsSendMessage } = webSocketSlice.actions;

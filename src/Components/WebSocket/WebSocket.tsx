import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  setWebSocketStatus,
  setWsSendMessage,
} from "../../features/webSocketSlice/webSocketSlice";
import { ScaleResponseType, wsSendMessageType } from "../../Services/Types";
import { setScaleResponse } from "../../features/ProductSlice/ProductSlice";
import "./Style/style.css";

export default function WebSocket() {
  const socketUrl = useAppSelector((state) => state.webSocket.socketUrl);
  const socketStatus = useAppSelector(
    (state) => state.webSocket.connectionStatus
  );
  const dispatch = useAppDispatch();
  const sendWsMessage = useAppSelector(
    (state) => state.webSocket.wsSendMessage
  );

  const { readyState, sendMessage } = useWebSocket(socketUrl, {
    onMessage(event: WebSocketEventMap["message"]) {
      handleSocketMessage(event);
    },
    onReconnectStop(numAttempts) {
      console.log("reconnect stopped!", numAttempts);
    },
    onOpen: () => {
      console.log("opened");
    },
    shouldReconnect: () => true,
    onClose: () => {
      console.log("connection closed");
    },
    share: true,
    retryOnError: true,
    reconnectInterval: 3000,
    reconnectAttempts: 1000, //3s * 1000 = 3000s or 5 minutes
  });

  function handleSocketMessage(message: MessageEvent) {
    const parsedJson: ScaleResponseType = JSON.parse(message.data);
    console.log("core message is", parsedJson);
    if (parsedJson.isDefault !== undefined && parsedJson.isDefault) {
      const data_: ScaleResponseType = {
        url: "",
        client: "",
        final_price: 0,
        isDefault: false,
        off: 0,
        raw_price: 0,
        title: "",
        weight: 0,
        isImage: false,
        alt_images: [],
      };
      dispatch(setScaleResponse(data_));
    } else {
      dispatch(setScaleResponse(parsedJson));
    }
  }

  //TODO: delete
  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  useEffect(() => {
    dispatch(setWebSocketStatus(readyState));
  }, [readyState]);

  useEffect(() => {
    if (sendWsMessage.isMessage) {
      sendMessage(JSON.stringify(sendWsMessage.body));
      const defaultVal_: wsSendMessageType = {
        isMessage: false,
        body: {
          client: "",
          message: "",
        },
      };
      dispatch(setWsSendMessage(defaultVal_));
    }
  }, [sendWsMessage.isMessage]);

  return (
    <div
      className={`snack-container ${
        // "error"
        socketStatus !== ReadyState.OPEN ? "error" : "opened"
      }`}
    >
      <p>ارتباط با سرور برقرار نیست!</p>
    </div>
  );
}

import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setWebSocketStatus } from "../../features/webSocketSlice/webSocketSlice";
import { ScaleResponseType } from "../../Services/Types";
import { setScaleResponse } from "../../features/ProductSlice/ProductSlice";
import "./Style/style.css";

export default function WebSocket() {
  const socketUrl = useAppSelector((state) => state.webSocket.socketUrl);
  const socketStatus = useAppSelector(
    (state) => state.webSocket.connectionStatus
  );
  const dispatch = useAppDispatch();
  const { readyState } = useWebSocket(socketUrl, {
    onMessage(event: WebSocketEventMap["message"]) {
      handleSocketMessage(event);
    },
    shouldReconnect: () => true,
    reconnectAttempts: 1000, //5000ms * 1000 = 5000s or near 8 minutes
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

  return (
    <div
      className={`snack-container ${
        socketStatus !== ReadyState.OPEN ? "error" : "opened"
      }`}
    >
      <p>ارتباط با سرور برقرار نیست!</p>
    </div>
  );
}

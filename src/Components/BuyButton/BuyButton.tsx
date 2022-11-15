import useWebSocket from "react-use-websocket";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ReadyState } from "react-use-websocket";
import { setWsSendMessage } from "../../features/webSocketSlice/webSocketSlice";
import { wsSendMessageType } from "../../Services/Types";
import "./Style/style.css";

export default function BuyButton() {
  const connectionStatus = useAppSelector(
    (state) => state.webSocket.connectionStatus
  );
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    const msg: wsSendMessageType = {
      body: {
        client: "UI",
        message: "complete",
      },
      isMessage: true,
    };

    dispatch(setWsSendMessage(msg));
  };

  return (
    <div className="button-container">
      <button
        disabled={connectionStatus !== ReadyState.OPEN}
        className={`button ${
          connectionStatus !== ReadyState.OPEN ? "disable" : ""
        }`}
        onClick={handleButtonClick}
      >
        تایید و چاپ برچسب
      </button>
    </div>
  );
}

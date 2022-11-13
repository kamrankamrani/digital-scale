import useWebSocket from "react-use-websocket";
import { useAppSelector } from "../../hooks";
import { ReadyState } from "react-use-websocket";
import "./Style/style.css";

export default function BuyButton() {
  const socketUrl = useAppSelector((state) => state.webSocket.socketUrl);
  const connectionStatus = useAppSelector(
    (state) => state.webSocket.connectionStatus
  );
  const { sendMessage } = useWebSocket(socketUrl);

  const handleButtonClick = () => {
    const msg = {
      message: "complete",
    };
    sendMessage(JSON.stringify(msg));
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

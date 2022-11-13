/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import LinearScaleRoundedIcon from "@mui/icons-material/LinearScaleRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import { useAppDispatch, useAppSelector } from "../../hooks";
import useWebSocket from "react-use-websocket";
import "./Style/style.css";
import { setSideMenuOpen } from "../../features/modalsSlice/modalsSlice";

export default function IconsMenu() {
  const socketUrl = useAppSelector((state) => state.webSocket.socketUrl);
  const dispatch = useAppDispatch();
  // const connectionStatus = useAppSelector(
  //   (state) => state.webSocket.connectionStatus
  // );
  const { sendMessage } = useWebSocket(socketUrl);

  const handleTareClick = () => {
    const msg = {
      message: "tare",
    };
    sendMessage(JSON.stringify(msg));
    dispatch(setSideMenuOpen(false));
  };

  const reloadClick = () => {
    // location.reload();
    dispatch(setSideMenuOpen(false));
  };

  return (
    <div className="menu" id="menu-container">
      <div className="menu-item" onClick={() => handleTareClick()}>
        <p>صفر ترازو</p>
        <LinearScaleRoundedIcon fontSize="small" />
      </div>
      <div className="menu-item" onClick={() => reloadClick()}>
        <p>بارگزاری مجدد</p>
        <ReplayRoundedIcon fontSize="small" />
      </div>
    </div>
  );
}

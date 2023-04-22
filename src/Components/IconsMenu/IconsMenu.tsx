/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import LinearScaleRoundedIcon from "@mui/icons-material/LinearScaleRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import { useAppDispatch } from "../../hooks";
import { setSideMenuOpen } from "../../features/modalsSlice/modalsSlice";
import { RequestApiType, wsSendMessageType } from "../../Services/Types";
import { setWsSendMessage } from "../../features/webSocketSlice/webSocketSlice";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./Style/style.css";
import { RequestApi } from "../../Services/RequestApi";
import { RPI_TARE_API } from "../../Services/Consts";

export default function IconsMenu() {
  const dispatch = useAppDispatch();

  const handleTareClick = () => {
    // const msg: wsSendMessageType = {
    //   body: {
    //     client: "UI",
    //     message: "tare",
    //   },
    //   isMessage: true,
    // };
    const reqBody: RequestApiType = { url: RPI_TARE_API };
    RequestApi(reqBody)
      .then((res) => console.log("rpi res => ", res))
      .catch((e) => console.log("rpi err =>", e));
    // dispatch(setWsSendMessage(msg));
    dispatch(setSideMenuOpen(false));
  };

  const reloadClick = () => {
    location.reload();
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
      <div className="menu-item" onClick={() => window.close()}>
        <p>خروج از برنامه</p>
        <ExitToAppIcon fontSize="small" />
      </div>
    </div>
  );
}

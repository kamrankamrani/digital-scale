import LinearScaleRoundedIcon from "@mui/icons-material/LinearScaleRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import "./Style/style.css";

export default function IconsMenu() {
  return (
    <div className="menu" id="menu-container">
      <div className="menu-item">
        <p>صفر ترازو</p>
        <LinearScaleRoundedIcon fontSize="small" />
      </div>
      <div className="menu-item">
        <p>بارگزاری مجدد</p>
        <ReplayRoundedIcon fontSize="small" />
      </div>
    </div>
  );
}

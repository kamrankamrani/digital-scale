import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import "./Style/style.css";

export default function ButtonLoadingLayout() {
  return (
    <div className="loading-layout-container">
      <CircularProgress size={30} />
    </div>
  );
}

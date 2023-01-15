import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import { useAppSelector } from "../../hooks";
import "./Style/style.css";

export default function ChangeItemButton() {
  const isChangeItemDisable = useAppSelector(
    (state) => state.pageRenderSlice.disableAlterButton
  );
  return (
    <div
      className={`change-item-container ${
        isChangeItemDisable ? "hide-change-item" : "show-change-item"
      }`}
    >
      <p>تغییر محصول</p>
      <CachedRoundedIcon fontSize="small" />
    </div>
  );
}

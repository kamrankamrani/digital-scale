/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import { setSearchModalOpen } from "../../features/pageRenderSlice/pageRenderSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "./Style/style.css";

export default function ChangeItemButton() {
  const isChangeItemDisable = useAppSelector(
    (state) => state.pageRenderSlice.disableAlterButton
  );
  const dispatch = useAppDispatch();

  const onChangeItemButtonClick = () => {
    dispatch(setSearchModalOpen(true));
  };

  return (
    <div
      className={`change-item-container ${
        isChangeItemDisable ? "hide-change-item" : "show-change-item"
      }`}
      onClick={onChangeItemButtonClick}
    >
      <p>تغییر محصول</p>
      <CachedRoundedIcon fontSize="small" />
    </div>
  );
}

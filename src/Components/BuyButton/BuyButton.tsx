import { useAppDispatch, useAppSelector } from "../../hooks";
import { setWsSendMessage } from "../../features/webSocketSlice/webSocketSlice";
import { wsSendMessageType } from "../../Services/Types";
import "./Style/style.css";

export default function BuyButton() {
  const disableButon = useAppSelector(
    (state) => state.pageRenderSlice.disableBuyButton
  );
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    const msg: wsSendMessageType = {
      body: {
        client: "UI",
        message: "print",
      },
      isMessage: true,
    };
    dispatch(setWsSendMessage(msg));
  };

  return (
    <div className="button-container">
      <button
        data-test="buy-button"
        disabled={disableButon}
        className={`button ${disableButon ? "disable" : ""}`}
        onClick={handleButtonClick}
      >
        تایید و چاپ برچسب
      </button>
    </div>
  );
}

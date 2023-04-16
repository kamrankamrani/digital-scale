import { useAppDispatch, useAppSelector } from "../../hooks";
import { setWsSendMessage } from "../../features/webSocketSlice/webSocketSlice";
import { wsSendMessageType } from "../../Services/Types";
import { useState } from "react";
import ButtonLoadingLayout from "./ButtonLoadingLayout";
import "./Style/style.css";

export default function BuyButton() {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const disableButon = useAppSelector(
    (state) => state.pageRenderSlice.disableBuyButton
  );
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    setIsButtonLoading(true);
    setTimeout(() => setIsButtonLoading(false), 3000);
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
        چاپ
        {isButtonLoading && <ButtonLoadingLayout />}
      </button>
    </div>
  );
}

import { useAppDispatch, useAppSelector } from "../../hooks";
import { setWsSendMessage } from "../../features/webSocketSlice/webSocketSlice";
import { wsSendMessageType } from "../../Services/Types";
import { useState } from "react";
import ButtonLoadingLayout from "./ButtonLoadingLayout";
import "./Style/style.css";
import { setLoadingBuyButton } from "../../features/pageRenderSlice/pageRenderSlice";

export default function BuyButton() {
  const disableButon = useAppSelector(
    (state) => state.pageRenderSlice.disableBuyButton
  );
  const loadingButtonState = useAppSelector(
    (state) => state.pageRenderSlice.loadingBuyButton
  );
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(setLoadingBuyButton(true));
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
        {loadingButtonState && <ButtonLoadingLayout />}
      </button>
    </div>
  );
}

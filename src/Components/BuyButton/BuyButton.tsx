import { useAppDispatch, useAppSelector } from "../../hooks";
import { SendDataToPrintType } from "../../Services/Types";
import ButtonLoadingLayout from "./ButtonLoadingLayout";
import { setLoadingBuyButton } from "../../features/pageRenderSlice/pageRenderSlice";
import { RPI_PRINT_API } from "../../Services/Consts";
import { SendDataToPrint } from "../../Services/RequestApi";
import { Button } from "@mui/material";
import "./Style/style.css";

export default function BuyButton() {
  const disableButon = useAppSelector(
    (state) => state.pageRenderSlice.disableBuyButton
  );
  const loadingButtonState = useAppSelector(
    (state) => state.pageRenderSlice.loadingBuyButton
  );
  const productData = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(setLoadingBuyButton(true));
    const reqBody: SendDataToPrintType = {
      url: RPI_PRINT_API,
      weight: productData.weight,
      title: decodeURI(productData.title),
      final_price: productData.final_price,
      barcode: productData.barcode,
    };
    SendDataToPrint(reqBody)
      .then((res) => {
        console.log("rpi res => ", res);
        dispatch(setLoadingBuyButton(false));
      })
      .catch((e) => {
        console.log("rpi err =>", e);
        dispatch(setLoadingBuyButton(false));
      });
  };

  return (
    <div className="button-container">
      <Button
        data-test="buy-button"
        disabled={disableButon}
        className={`button ripple ${disableButon ? "" : ""}`}
        onClick={handleButtonClick}
      >
        چاپ
        {loadingButtonState && <ButtonLoadingLayout />}
      </Button>
    </div>
  );
}

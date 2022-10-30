import { useAppSelector } from "../../hooks";
import { PersianNumber } from "../../Services/ConvertNumbers";
import { ScaleResponseType } from "../../Services/Types";
import "./Style/style.css";

export default function ProductTitle() {
  const webSocketData: ScaleResponseType = useAppSelector(
    (state) => state.product
  );
  return (
    <>
      <div className="text-container">
        <p className="title">نام محصول: </p>
        <p>لیمو سنگی</p>
      </div>
      <div className="text-container">
        <p className="weight">وزن : </p>
        <p>{PersianNumber(webSocketData.weight)} گرم</p>
      </div>
    </>
  );
}

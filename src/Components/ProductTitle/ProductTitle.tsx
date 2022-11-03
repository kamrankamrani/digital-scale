import { useAppSelector } from "../../hooks";
import { PersianNumber } from "../../Services/ConvertNumbers";
import { ScaleResponseType } from "../../Services/Types";
import "./Style/style.css";

export default function ProductTitle() {
  const webSocketData: ScaleResponseType = useAppSelector(
    (state) => state.product
  );

  function decode_utf8(s: string) {
    return decodeURIComponent(escape(s));
  }

  return (
    <>
      <div className="text-container">
        <p className="title">نام محصول: </p>
        <p>
          {webSocketData.title && decode_utf8(decodeURI(webSocketData.title))}
        </p>
      </div>
      <div className="text-container">
        <p className="weight">وزن : </p>
        <p>{PersianNumber(webSocketData.weight)} گرم</p>
      </div>
    </>
  );
}

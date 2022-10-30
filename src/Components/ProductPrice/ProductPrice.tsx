import { useAppSelector } from "../../hooks";
import { PersianNumber } from "../../Services/ConvertNumbers";
import { ScaleResponseType } from "../../Services/Types";
import "./Style/style.css";

export default function ProductPrice() {
  const webSocketData: ScaleResponseType = useAppSelector(
    (state) => state.product
  );
  return (
    <div className="text-container">
      <p className="price">قیمت برای مصرف کننده : </p>
      <div className="price-container">
        {webSocketData.off !== 0 && (
          <div className="off-container">
            <div className="off">
              <p>{PersianNumber(webSocketData.off)}%</p>
            </div>
            <div className="text">
              {PersianNumber(webSocketData.raw_price)} تومان
            </div>
          </div>
        )}
        <div className="final-price-container">
          <div className="text">
            {PersianNumber(webSocketData.final_price)} تومان
          </div>
        </div>
      </div>
    </div>
  );
}

import { PersianNumber } from "../../Services/ConvertNumbers";
import "./Style/style.css";

export default function ProductPrice() {
  return (
    <div className="text-container">
      <p className="price">قیمت برای مصرف کننده : </p>
      <div className="price-container">
        <div className="off-container">
          <div className="off">
            <p>{PersianNumber(15)}%</p>
          </div>
          <div className="text">{PersianNumber("5,640")} تومان</div>
        </div>
        <div className="final-price-container">
          <div className="text">{PersianNumber("4,794")} تومان</div>
        </div>
      </div>
    </div>
  );
}

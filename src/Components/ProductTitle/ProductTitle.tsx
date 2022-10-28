import { PersianNumber } from "../../Services/ConvertNumbers";
import "./Style/style.css";

export default function ProductTitle() {
  return (
    <>
      <div className="text-container">
        <p className="title">نام محصول: </p>
        <p>لیمو سنگی</p>
      </div>
      <div className="text-container">
        <p className="weight">وزن : </p>
        <p>{PersianNumber(300)} گرم</p>
      </div>
    </>
  );
}

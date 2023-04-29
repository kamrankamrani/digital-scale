import { useAppSelector } from "../../hooks";
import { PersianNumber } from "../../Services/ConvertNumbers";
import { ProductDataTypeWithWeight } from "../../Services/Types";
import "./Style/style.css";

export default function ProductPrice() {
  const productData: ProductDataTypeWithWeight = useAppSelector(
    (state) => state.product
  );
  return (
    <div className="text-container">
      <p className="price">قیمت برای مصرف کننده : </p>
      <div className="price-container">
        {productData.off !== "0" && (
          <div className="off-container">
            <div className="off">
              <p>{PersianNumber(productData.off)}%</p>
            </div>
            <div className="text">{PersianNumber(productData.price)} تومان</div>
          </div>
        )}
        <div className="final-price-container">
          <div className="text">
            {PersianNumber(productData.final_price)} تومان
          </div>
        </div>
      </div>
    </div>
  );
}

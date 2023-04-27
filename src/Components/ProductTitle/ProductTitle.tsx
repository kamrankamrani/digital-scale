import { useAppSelector } from "../../hooks";
import { PersianNumber } from "../../Services/ConvertNumbers";
import { ProductDataTypeWithWeight } from "../../Services/Types";
import "./Style/style.css";

export default function ProductTitle() {
  const productData: ProductDataTypeWithWeight = useAppSelector(
    (state) => state.product
  );

  return (
    <>
      <div className="text-container margin-top-one-rem">
        <p className="title">نام محصول: </p>
        <p>{productData.title}</p>
      </div>
      <div className="text-container">
        <p className="weight">وزن : </p>
        <p>{PersianNumber(productData.weight || "0")} گرم</p>
      </div>
    </>
  );
}

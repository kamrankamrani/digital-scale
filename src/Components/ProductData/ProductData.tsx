import BuyButton from "../BuyButton/BuyButton";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductTitle from "../ProductTitle/ProductTitle";
import "./Style/style.css";

export default function ProductData() {
  return (
    <div className="data-display-container">
      <ProductTitle />
      <ProductPrice />
      <BuyButton />
    </div>
  );
}

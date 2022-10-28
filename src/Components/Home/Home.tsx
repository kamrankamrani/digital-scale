import ProductData from "../ProductData/ProductData";
import ProductImage from "../ProductImage/ProductImage";
import "./Style/style.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <ProductImage />
        <ProductData />
      </div>
    </div>
  );
}

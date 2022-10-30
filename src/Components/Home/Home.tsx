import ProductData from "../ProductData/ProductData";
import ProductImage from "../ProductImage/ProductImage";
import WebSocket from "../WebSocket/WebSocket";
import "./Style/style.css";

export default function Home() {
  return (
    <div className="home-container">
      <WebSocket />
      <div className="content-wrapper">
        <ProductImage />
        <ProductData />
      </div>
    </div>
  );
}

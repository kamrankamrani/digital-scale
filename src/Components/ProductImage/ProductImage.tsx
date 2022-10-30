import { useEffect, useState } from "react";
// import Img from "../../assets/lemon.jpg";
import { useAppSelector } from "../../hooks";
import "./Style/style.css";

export default function ProductImage() {
  const [imageEl, setImageEl] = useState<HTMLDivElement | null>(null);
  const imageUrl: string = useAppSelector((state) => state.product.url);
  const mockImageUrl = "/src/assets/lemon.jpg";

  useEffect(() => {
    const el_ = document.querySelector("#product-image") as HTMLDivElement;
    if (el_) {
      setImageEl(el_);
    }
  }, []);

  useEffect(() => {
    let el_: HTMLDivElement | null = null;
    if (imageEl === null) {
      if (imageUrl) {
        el_ = document.querySelector("#product-image") as HTMLDivElement;
        el_.style.backgroundImage = `url("${mockImageUrl}")`; //TODO: change to imageUrl
      }
    }

    if (imageUrl && imageEl) {
      imageEl.style.backgroundImage = `url(${mockImageUrl})`; //TODO: change to imageUrl
    }
  }, [imageUrl]);

  return (
    <div className="image-container">
      <div id="product-image" className="image-wrapper"></div>
    </div>
  );
}

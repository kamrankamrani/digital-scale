import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import "./Style/style.css";

export default function ProductImage() {
  const [imageEl, setImageEl] = useState<HTMLDivElement | null>(null);
  const [changeItem, setChangeItem] = useState<boolean>(true);
  const imageUrl: string = useAppSelector((state) => state.product.url);
  const altImages = useAppSelector((state) => state.product.alt_images);
  // const mockImageUrl = "/src/assets/lemon.jpg";
  // const mockImageUrl =
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lemon.jpg/640px-Lemon.jpg";

  useEffect(() => {
    const el_ = document.querySelector("#product-image") as HTMLDivElement;
    if (el_) {
      setImageEl(el_);
    }
  }, []);

  useEffect(() => {
    if (altImages.length) {
      setChangeItem(true);
    } else {
      setChangeItem(false);
    }
  }, [altImages]);

  useEffect(() => {
    let el_: HTMLDivElement | null = null;
    if (imageEl === null) {
      el_ = document.querySelector("#product-image") as HTMLDivElement;
      setImageEl(el_);
      if (imageUrl) {
        el_.style.backgroundImage = `url("${imageUrl}")`;
        el_.style.backgroundColor = "#fff";
      } else {
        el_.style.backgroundImage = `url("")`;
        el_.style.backgroundColor = "#cfcfcf";
      }
      return;
    }

    if (imageUrl && imageEl) {
      imageEl.style.backgroundImage = `url("${imageUrl}")`;
      imageEl.style.backgroundColor = "#fff";
    } else {
      imageEl.style.backgroundImage = `url("")`;
      imageEl.style.backgroundColor = "#cfcfcf";
    }
  }, [imageUrl]);

  return (
    <div className="image-container">
      <div id="product-image" className="image-wrapper">
        <div
          className={`change-item ${changeItem ? "show-change-item" : ""}`}
          id="change-item"
          role={"button"}
        >
          <p>تغییر محصول</p>
          <CachedRoundedIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

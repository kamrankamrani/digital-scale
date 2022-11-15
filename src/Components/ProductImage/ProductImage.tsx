/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import "./Style/style.css";
import Modal from "../Modal/Modal";

export default function ProductImage() {
  const [imageEl, setImageEl] = useState<HTMLDivElement | null>(null);
  const [changeItem, setChangeItem] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const imageUrl: string = useAppSelector((state) => state.product.url);
  const altImages = useAppSelector((state) => state.product.alt_images);
  // const mockImageUrl = "/src/assets/lemon.jpg";
  const mockImageUrl = "https://picsum.photos/id/237/1000/1000";

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

  const handleChangeItemClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="image-container">
      <div id="product-image" className="image-wrapper">
        <div
          className={`change-item ${changeItem ? "show-change-item" : ""}`}
          id="change-item"
          role={"button"}
          onClick={handleChangeItemClick}
        >
          <p>تغییر محصول</p>
          <CachedRoundedIcon fontSize="small" />
        </div>
      </div>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import Modal from "../Modal/Modal";
import Loading from "../Loading/Loading";
import defaultImage from "../../assets/watermelon.svg";
import "./Style/style.css";

export default function ProductImage() {
  const [imageEl, setImageEl] = useState<HTMLDivElement | null>(null);
  const [changeItem, setChangeItem] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const imageUrl: string = useAppSelector((state) => state.product.url);
  const altImages = useAppSelector((state) => state.product.alt_images);
  const loadingState = useAppSelector(
    (state) => state.pageRenderSlice.loadingState
  );
  const disableAlterButton = useAppSelector(
    (state) => state.pageRenderSlice.disableAlterButton
  );
  const mockImageUrl = "";

  //https://picsum.photos/id/237/1000/1000

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
      if (!el_) return;
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
    if (imageEl) {
      if (imageUrl) {
        imageEl.style.backgroundImage = `url("${imageUrl}")`;
        imageEl.style.backgroundColor = "#fff";
      } else {
        imageEl.style.backgroundImage = `url("")`;
        imageEl.style.backgroundColor = "#cfcfcf";
      }
    }
  }, [imageUrl]);

  const handleChangeItemClick = () => {
    if (disableAlterButton) {
      return;
    }
    setShowModal(!showModal);
  };

  return (
    <div className="image-container">
      {mockImageUrl ? (
        <img alt="vms-product" src={mockImageUrl} className="product-image" />
      ) : (
        <div className="default-image">
          <img src={defaultImage} alt="default" />
        </div>
      )}
      {/* <div id="product-image" className="image-wrapper">
        {loadingState && <Loading />}
      </div> */}
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

{
  /* <div
          className={`change-item ${changeItem ? "show-change-item" : ""} ${
            disableAlterButton ? "disabled" : ""
          }`}
          id="change-item"
          role={"button"}
          onClick={handleChangeItemClick}
        >
          <p>تغییر محصول</p>
          <CachedRoundedIcon fontSize="small" />
        </div> */
}

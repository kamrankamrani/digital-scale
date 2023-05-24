import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Modal from "../Modal/Modal";
import Loading from "../Loading/Loading";
import defaultImage from "../../assets/watermelon.svg";
import { setDisableAlterButtonState } from "../../features/pageRenderSlice/pageRenderSlice";
import "./Style/style.css";

export default function ProductImage() {
  const showModal = useAppSelector(
    (state) => state.pageRenderSlice.searchModalOpen
  );
  const imageUrl = useAppSelector((state) => state.product.url);
  const loadingState = useAppSelector(
    (state) => state.pageRenderSlice.loadingState
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (imageUrl) {
      dispatch(setDisableAlterButtonState(false));
    } else {
      dispatch(setDisableAlterButtonState(false)); //true
    }
  }, [imageUrl]);

  return (
    <div className="image-container">
      {imageUrl ? (
        <img alt="vms-product" src={imageUrl} className="product-image" />
      ) : (
        <div className="default-image">
          <img src={defaultImage} alt="default" />
          {loadingState && <Loading />}
        </div>
      )}
      {showModal && <Modal />}
    </div>
  );
}

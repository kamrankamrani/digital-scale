import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Modal from "../Modal/Modal";
import Loading from "../Loading/Loading";
import defaultImage from "../../assets/watermelon.svg";
import "./Style/style.css";
import { setDisableAlterButtonState } from "../../features/pageRenderSlice/pageRenderSlice";

export default function ProductImage() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const imageUrl: string = useAppSelector((state) => state.product.url);
  const loadingState = useAppSelector(
    (state) => state.pageRenderSlice.loadingState
  );
  const dispatch = useAppDispatch();

  // const mockImageUrl = "https://picsum.photos/id/237/1000/1000";

  useEffect(() => {
    if (imageUrl) {
      dispatch(setDisableAlterButtonState(false));
    } else {
      dispatch(setDisableAlterButtonState(true));
    }
  }, [imageUrl]);

  return (
    <div className="image-container">
      {imageUrl ? (
        <img alt="vms-product" src={imageUrl} className="product-image" />
      ) : (
        <div className="default-image">
          <img src={defaultImage} alt="default" />
        </div>
      )}
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

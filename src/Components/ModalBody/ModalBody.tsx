import { ModalProps } from "../../Services/Types";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./Style/style.css";
import { useAppSelector } from "../../hooks";

export default function ModalBody(props: ModalProps) {
  const imagesArr = useAppSelector((state) => state.product.alt_images);
  const mockImageUrl = "/src/assets/lemon.jpg";

  const onModalClose = () => {
    const el_ = document.querySelector(".modal-body");
    if (!el_) return;
    el_.classList.add("hide-modal");
    setTimeout(() => {
      props.setShowModal(false);
    }, 500);
  };
  return (
    <div className="modal-body">
      <div className="icon-container">
        <CloseRoundedIcon onClick={onModalClose} fontSize="large" />
      </div>
      {imagesArr.map((value, index) => {
        return (
          <>
            <div key={index} className="item">
              <div>
                <p>لیمو سنگی</p>
              </div>
              <div>
                <img
                  className="image"
                  src={mockImageUrl}
                  alt={`img-${index}`}
                />
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
}

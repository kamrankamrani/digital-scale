import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { setSearchModalOpen } from "../../features/pageRenderSlice/pageRenderSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import defaultImage from "../../assets/watermelon.svg";
import "./Style/style.css";
import useSearchItems from "../CustomHooks/useSearchItems";
import { useEffect, useState } from "react";

export default function ModalBody() {
  const imagesArr = useAppSelector((state) => state.product);
  // const mockImageUrl = "/src/assets/lemon.jpg";
  const [searchValue, setSearchValue] = useState<string>("");
  const altimgs_ = useSearchItems(searchValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("data got! -> ", altimgs_);
  }, [altimgs_]);

  const onModalClose = () => {
    const el_ = document.querySelector(".modal-body");
    if (!el_) return;
    el_.classList.add("hide-modal");
    setTimeout(() => {
      dispatch(setSearchModalOpen(false));
    }, 500);
  };

  const handleSearchItems = (value: string) => {
    // useSearchItems(value);
    setSearchValue(value);
  };

  return (
    <div className="modal-body">
      <div className="icon-container">
        <CloseRoundedIcon onClick={onModalClose} fontSize="large" />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => handleSearchItems(e.target.value)}
        />
      </div>
      {/* {imagesArr.map((value, index) => {
        return (
          <>
            <div key={value.id} className="item">
              <div>
                <p>{value.title}</p>
              </div>
              <div className="item-image-container">
                <img
                  className="image"
                  src={value.url.length ? value.url : defaultImage}
                  alt={`img-${index}`}
                />
              </div>
            </div>
            <hr />
          </>
        );
      })} */}
    </div>
  );
}

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  setKeyboardModalOpen,
  setSearchModalOpen,
} from "../../features/pageRenderSlice/pageRenderSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import defaultImage from "../../assets/watermelon.svg";
import useSearchItems from "../CustomHooks/useSearchItems";
import { useEffect, useRef, useState } from "react";
import { ProductDataTypeWithWeight } from "../../Services/Types";
import { setProductArrayResponse } from "../../features/ProductArraySlice/productArraySlice";
import "./Style/style.css";
import KeyboardModal from "../KeyboardModal/KeyboardModal";
import KeyboardWrapper from "../KeyboardBody/KeyboardWrapper";

export default function ModalBody() {
  const productArray = useAppSelector(
    (state) => state.ProductArraySlice.prArray
  );
  const showKeyModal = useAppSelector(
    (state) => state.pageRenderSlice.keyboardModalOpen
  );
  // const mockImageUrl = "/src/assets/lemon.jpg";
  const [searchValue, setSearchValue] = useState<string>("");
  const altimgs_ = useSearchItems(searchValue);
  const dispatch = useAppDispatch();
  const keyboard = useRef<any>(null);

  useEffect(() => {
    const mockData: ProductDataTypeWithWeight[] = [
      {
        barcode: "123",
        category: "sss",
        final_price: "1000",
        off: "0",
        price: "1000",
        title: "ماهی",
        url: "",
        vms: "",
        weight: "10",
      },
      {
        barcode: "123",
        category: "sss",
        final_price: "1000",
        off: "0",
        price: "1000",
        title: "مرغ",
        url: "",
        vms: "",
        weight: "10",
      },
      {
        barcode: "123",
        category: "sss",
        final_price: "1000",
        off: "0",
        price: "1000",
        title: "سوپ",
        url: "",
        vms: "",
        weight: "10",
      },
      {
        barcode: "123",
        category: "sss",
        final_price: "1000",
        off: "0",
        price: "1000",
        title: "سوپ",
        url: "",
        vms: "",
        weight: "10",
      },
      {
        barcode: "123",
        category: "sss",
        final_price: "1000",
        off: "0",
        price: "1000",
        title: "سوپ",
        url: "",
        vms: "",
        weight: "10",
      },
    ];
    dispatch(setProductArrayResponse(mockData));
  }, []);

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
    if (keyboard.current) {
      keyboard.current.setInput(value);
    }
    setSearchValue(value);
  };

  const handleOnSearchInputClick = () => {
    dispatch(setKeyboardModalOpen(true));
  };

  return (
    <div className="modal-body">
      <div className="icon-container">
        <CloseRoundedIcon onClick={onModalClose} fontSize="large" />
      </div>
      <div className="input-container">
        <input
          id="search-input"
          type="text"
          value={searchValue}
          onClick={handleOnSearchInputClick}
          onChange={(e) => handleSearchItems(e.target.value)}
        />
      </div>
      <div className="items-container">
        {productArray.map((value, index) => {
          return (
            <>
              <div key={value.vms} className="item">
                <div className="item-image-container">
                  <img
                    className="image"
                    src={value.url.length ? value.url : defaultImage}
                    alt={`img-${index}`}
                  />
                </div>
                <div>
                  <p>{value.title}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>

      {/* {showKeyModal && <KeyboardModal />} */}
      {showKeyModal && (
        <KeyboardWrapper keyboardRef={keyboard} onChange={setSearchValue} />
      )}
    </div>
  );
}

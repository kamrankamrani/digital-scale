import { setKeyboardModalOpen } from "../../features/pageRenderSlice/pageRenderSlice";
import { useAppDispatch } from "../../hooks";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./Style/style.css";

export function KeyboardBody() {
  const dispatch = useAppDispatch();
  const [inputEl, setInputEl] = useState<HTMLInputElement | null>(null);
  const keyboard = useRef(null);

  useEffect(() => {
    if (inputEl === null) {
      const El_ = document.getElementById("search-input") as HTMLInputElement;
      setInputEl(El_);
      //   El_.addEventListener("input" , e => {
      //     keyboard.setInput(e.target?.value);
      //   })
    }
  }, []);

  const onKeyboardModalClose = () => {
    const el_ = document.querySelector(".key-modal-body");
    if (!el_) return;
    el_.classList.add("hide-key-modal");
    setTimeout(() => {
      dispatch(setKeyboardModalOpen(false));
    }, 500);
  };

  const onKeyboardChange = (input: string) => {
    if (inputEl) {
      inputEl.value = input;
    }
    console.log("Input changed", input);
  };

  const onKeyboardPress = (button: string) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    // if (button === "{shift}" || button === "{lock}") handleShift();
  };

  return (
    <div className="key-modal-body">
      <div className="icon-container">
        <CloseRoundedIcon onClick={onKeyboardModalClose} fontSize="large" />
      </div>
      <div className="simple-keyboard"></div>
      <h2>this is keyboard</h2>
    </div>
  );
}

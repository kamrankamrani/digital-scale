import { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "react-simple-keyboard/build/css/index.css";
import { useAppDispatch } from "../../hooks";
import { setKeyboardModalOpen } from "../../features/pageRenderSlice/pageRenderSlice";
import layout from "simple-keyboard-layouts/build/layouts/farsi";
import "./Style/style.css";
import { PersianLayout } from "../../Services/Consts";

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<any>;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef,
}) => {
  const [layoutName, setLayoutName] = useState("default");
  const dispatch = useAppDispatch();
  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }
  };

  const onKeyboardModalClose = () => {
    const el_ = document.querySelector(".key-modal-body");
    if (!el_) return;
    el_.classList.add("hide-key-modal");
    setTimeout(() => {
      dispatch(setKeyboardModalOpen(false));
    }, 500);
  };

  return (
    <div className="key-modal-body">
      <div className="icon-container">
        <CloseRoundedIcon onClick={onKeyboardModalClose} fontSize="large" />
      </div>
      <Keyboard
        keyboardRef={(r) => (keyboardRef.current = r)}
        layoutName={layoutName}
        layout={PersianLayout}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onRender={() => console.log("Rendered")}
      />
    </div>
  );
};

export default KeyboardWrapper;

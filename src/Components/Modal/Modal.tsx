import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ModalBody from "../ModalBody/ModalBody";
import "./Style/style.css";

const modalRoot = document.getElementById("modal");

export default function Modal() {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    if (modalRoot) {
      if (elRef.current) {
        modalRoot.appendChild<HTMLDivElement>(elRef.current);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return () => modalRoot.removeChild<HTMLDivElement | any>(elRef.current);
      }
    }
  }, []);

  return createPortal(
    <div className="modal-container">
      <ModalBody />
    </div>,
    elRef.current
  );
}

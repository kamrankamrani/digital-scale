/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ProductData from "../ProductData/ProductData";
import ProductImage from "../ProductImage/ProductImage";
import WebSocket from "../WebSocket/WebSocket";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState } from "react";
import IconsMenu from "../IconsMenu/IconsMenu";
import "./Style/style.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setSideMenuOpen } from "../../features/modalsSlice/modalsSlice";

export default function Home() {
  // const [openMenu, setOpenMenu] = useState(false);
  const openSideMenu = useAppSelector(
    (state) => state.modalSlice.isSideMenuOpen
  );
  const [menuIconEl, setMenuIconEl] = useState<Element | null>(null);
  const [closeIconEl, setCloseIconEl] = useState<Element | null>(null);
  const [menuContainerEl, setMenuContainerEl] = useState<Element | null>(null);
  const dispatch = useAppDispatch();

  const openSideMenuAnimation = () => {
    if (!menuIconEl || !closeIconEl) {
      return;
    }
    menuIconEl.classList.remove("show");
    closeIconEl.classList.remove("hide");
    menuIconEl.classList.add("hide");
    closeIconEl.classList.add("show");
    if (menuContainerEl) {
      menuContainerEl.classList.remove("hide-menu");
      menuContainerEl.classList.add("show-menu");
    }
  };

  const closeSideMenuAnimation = () => {
    if (!menuIconEl || !closeIconEl) {
      return;
    }
    menuIconEl.classList.remove("hide");
    closeIconEl.classList.remove("show");
    menuIconEl.classList.add("show");
    closeIconEl.classList.add("hide");
    if (menuContainerEl) {
      menuContainerEl.classList.remove("show-menu");
      menuContainerEl.classList.add("hide-menu");
    }
  };

  const handleMenuClick = () => {
    dispatch(setSideMenuOpen(!openSideMenu));
  };

  useEffect(() => {
    if (openSideMenu) {
      openSideMenuAnimation();
    } else {
      //open menu true
      closeSideMenuAnimation();
    }
  }, [openSideMenu]);

  useEffect(() => {
    const menuEl_ = document.querySelector("#menu-icon");
    const closeEl_ = document.querySelector("#close-icon");
    const menuContEl_ = document.querySelector("#menu-container");
    setMenuIconEl(menuEl_);
    setCloseIconEl(closeEl_);
    setMenuContainerEl(menuContEl_);
    if (menuEl_ && closeEl_) {
      menuEl_.classList.add("show");
      closeEl_.classList.add("hide");
    }
  }, []);

  return (
    <div className="home-container">
      <WebSocket />
      <div className="top-menu">
        <div className="icon" onClick={handleMenuClick}>
          <MenuRoundedIcon className="icon-item" id="menu-icon" />
          <CloseRoundedIcon className="icon-item" id="close-icon" />
        </div>
        <IconsMenu />
      </div>
      <div className="content-wrapper">
        <ProductImage />
        <ProductData />
      </div>
    </div>
  );
}

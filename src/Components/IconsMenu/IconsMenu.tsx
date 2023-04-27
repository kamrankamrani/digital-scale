/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import LinearScaleRoundedIcon from "@mui/icons-material/LinearScaleRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import { useAppDispatch } from "../../hooks";
import { setSideMenuOpen } from "../../features/modalsSlice/modalsSlice";
import { RequestApiType, wsSendMessageType } from "../../Services/Types";
import { setWsSendMessage } from "../../features/webSocketSlice/webSocketSlice";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { RequestApi } from "../../Services/RequestApi";
import { RPI_SEND_IMAGE, RPI_TARE_API } from "../../Services/Consts";
import { useEffect } from "react";
import "./Style/style.css";
import axios from "axios";
import { FetchImageRequest } from "../../Services/FetchRequest";

export default function IconsMenu() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // RequestApi({
    //   url: "http://localhost:5173/image.jpg",
    // }).then((res: any) => {
    //   // const blob = res.data.blob();
    //   new Response(res.data).blob().then((blobfile) => {
    //     const url = RPI_SEND_IMAGE;
    //     console.log("r is => ", blobfile);
    //     const file = new File([blobfile], "image.jpg", { type: blobfile.type });
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     formData.append("weight", "1200");
    //     axios
    //       .post(url, formData, {
    //         headers: { "Content-Type": "multipart/form-data" },
    //       })
    //       .then((res) => {
    //         console.log("axios res is ", res);
    //       })
    //       .catch((err) => {
    //         console.log("axios error is ", err);
    //       });
    //   });
    // const blob = new Blob([res], { type: "image/jpeg" });
    // // console.log(blob);
    // const file = new File([blob], "image.jpg", { type: blob.type });
    // console.log(file);
    // const fd = new FormData();
    // fd.append("file", file);
    // const url = RPI_SEND_IMAGE;
    // axios
    //   .post(url, fd, { headers: { "Content-Type": "multipart/form-data" } })
    //   .then((res) => console.log("axios res ", res))
    //   .catch((e) => console.log("axios error", e));
    // });
    // const url = RPI_SEND_IMAGE;
    // const imageUrl = "http://localhost:5173/image.jpg";
    // const file = await fetch(imageUrl)
    //   .then((r) => r.blob())
    //   .then(
    //     (blobFile) => new File([blobFile], "image.jpg", { type: blobFile.type })
    //   );
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("weight", "1200");
    // axios.post(url, formData, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
  }, []);

  const handleTareClick = () => {
    // const msg: wsSendMessageType = {
    //   body: {
    //     client: "UI",
    //     message: "tare",
    //   },
    //   isMessage: true,
    // };
    const reqBody: RequestApiType = { url: RPI_TARE_API };
    RequestApi(reqBody)
      .then((res) => console.log("rpi res => ", res))
      .catch((e) => console.log("rpi err =>", e));
    // dispatch(setWsSendMessage(msg));
    dispatch(setSideMenuOpen(false));
  };

  const reloadClick = async () => {
    // location.reload();
    const url = "http://31.47.58.35:5004/tarazo";
    const imageUrl = "http://localhost:5173/image.jpg";

    // const url = RPI_SEND_IMAGE;
    // const imageUrl = "http://localhost:5173/image.jpg";
    // const file = await fetch(imageUrl)
    //   .then((r) => r.blob())
    //   .then(
    //     (blobFile) => new File([blobFile], "image.jpg", { type: blobFile.type })
    //   );
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("weight", "1200");
    // axios
    //   .post(url, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res_) => {
    //     console.log("axios res ", res_);
    //   })
    //   .catch((e) => console.log("axios er ", e));

    FetchImageRequest({ url: imageUrl }).then((res: File) => {
      const formData = new FormData();
      formData.append("file", res);
      formData.append("weight", "1200");
      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res_) => {
          console.log("axios res ", res_);
        })
        .catch((e) => console.log("axios er ", e));
    });
    dispatch(setSideMenuOpen(false));
  };

  return (
    <div className="menu" id="menu-container">
      <div className="menu-item" onClick={() => handleTareClick()}>
        <p>صفر ترازو</p>
        <LinearScaleRoundedIcon fontSize="small" />
      </div>
      <div className="menu-item" onClick={() => reloadClick()}>
        <p>بارگزاری مجدد</p>
        <ReplayRoundedIcon fontSize="small" />
      </div>
      <div className="menu-item" onClick={() => window.close()}>
        <p>خروج از برنامه</p>
        <ExitToAppIcon fontSize="small" />
      </div>
    </div>
  );
}

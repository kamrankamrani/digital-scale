import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setWebSocketStatus } from "../../features/webSocketSlice/webSocketSlice";
import {
  ProductDataType,
  ProductDataTypeWithWeight,
  RPIWebsocketMessage,
} from "../../Services/Types";
import { setProductResponse } from "../../features/ProductSlice/ProductSlice";
import {
  setDisableBuyButtonState,
  setPageLoadingState,
} from "../../features/pageRenderSlice/pageRenderSlice";
import { FetchImageRequest } from "../../Services/FetchRequest";
import axios from "axios";
import { RPI_SEND_IMAGE, UI_SERVER_ADDRESS } from "../../Services/Consts";
import "./Style/style.css";

export default function WebSocket() {
  const socketUrl = useAppSelector((state) => state.webSocket.socketUrl);
  const socketStatus = useAppSelector(
    (state) => state.webSocket.connectionStatus
  );
  const dispatch = useAppDispatch();
  const productDataFromRedux = useAppSelector((state) => state.product);
  // const imageUrl = "http://localhost:5173/image.jpg";
  // const imageUrl = `${UI_SERVER_ADDRESS}/${parsedJson.image_url}`;

  const DEFAULT_PRODUCT_DATA: ProductDataTypeWithWeight = useMemo(() => {
    return {
      url: "",
      price: "",
      final_price: "0",
      category: "",
      off: "0",
      vms: "",
      barcode: "",
      title: "",
      weight: "",
    };
  }, []);

  const { readyState } = useWebSocket(socketUrl, {
    onMessage(event: WebSocketEventMap["message"]) {
      handleSocketMessage(event);
    },
    onReconnectStop(numAttempts) {
      console.log("reconnect stopped!", numAttempts);
    },
    onOpen: () => {
      console.log("opened");
    },
    shouldReconnect: () => true,
    onClose: () => {
      console.log("connection closed");
    },
    share: true,
    retryOnError: true,
    reconnectInterval: 5000,
    reconnectAttempts: 10000, //3s * 10000 = 3000s or 500 minutes
  });

  function handleSocketMessage(message: MessageEvent) {
    const parsedJson: RPIWebsocketMessage = JSON.parse(message.data);

    if (parsedJson.client === "scale") {
      // it is not for me
      return;
    }

    if (!parsedJson.message_type) {
      // console.log("data format error! not message included", parsedJson);
      return;
    }
    dispatch(setDisableBuyButtonState(true));

    if (parsedJson.message_type === "default") {
      console.log("default state");
      dispatch(setProductResponse(DEFAULT_PRODUCT_DATA));
    } else if (parsedJson.message_type === "weight") {
      console.log("weight state", parsedJson);
      const instantChangeData: ProductDataTypeWithWeight = {
        ...productDataFromRedux,
        weight: parsedJson.weight,
      };
      dispatch(setProductResponse(instantChangeData));
      FetchImageRequest({
        url: `${UI_SERVER_ADDRESS}/${parsedJson.image_url}`,
      }).then((res: File) => {
        const formData = new FormData();
        formData.append("file", res);
        formData.append("weight", parsedJson.weight);
        axios
          .post<ProductDataType>(RPI_SEND_IMAGE, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res_) => {
            console.log("axios res ", res_.data);
            const data_: ProductDataTypeWithWeight = {
              ...res_.data,
              off: String(res_.data.off),
              final_price: String(res_.data.final_price),
              weight: parsedJson.weight,
            };
            dispatch(setPageLoadingState(false));
            dispatch(setProductResponse(data_));
          })
          .catch((e) => {
            dispatch(setPageLoadingState(false));
            console.log("axios er ", e);
          });
      });
      dispatch(setDisableBuyButtonState(false));
    } else if (parsedJson.message_type === "loading") {
      dispatch(setPageLoadingState(true));
    }
  }

  useEffect(() => {
    dispatch(setWebSocketStatus(readyState));
  }, [readyState]);

  return (
    <div
      data-test="web-socket-banner"
      className={`snack-container ${
        // "error"
        socketStatus !== ReadyState.OPEN ? "error" : "opened"
      }`}
    >
      <p>ارتباط با سرور برقرار نیست!</p>
    </div>
  );
}

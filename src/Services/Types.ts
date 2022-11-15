import type { SendMessage } from "react-use-websocket";

export interface ScaleResponseType {
  url: string;
  raw_price: number;
  off: number;
  final_price: number;
  isDefault: boolean;
  client: string;
  weight: number;
  title: string;
  isImage: boolean;
  alt_images: {
    url: string;
  }[];
}

export interface wsSendMessageType {
  isMessage: boolean;
  body: {
    client: string;
    message: string;
  };
}

export interface WebSocketType {
  socketUrl: string;
  connectionStatus: number;
  wsSendMessage: wsSendMessageType;
}

export interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

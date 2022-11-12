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

export interface WebSocketType {
  socketUrl: string;
  connectionStatus: number;
}

export interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

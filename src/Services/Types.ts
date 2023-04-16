export interface ScaleResponseType {
  url: string;
  raw_price: number;
  off: number;
  final_price: number;
  client: string;
  weight: number;
  title: string;
  isImage: boolean;
  message: string;
  alt_items: {
    id: number;
    url: string;
    title: string;
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

export interface pageRenderSliceType {
  disableBuyButton: boolean;
  disableAlterButton: boolean;
  loadingState: boolean;
  searchModalOpen: boolean;
  loadingBuyButton: boolean;
}

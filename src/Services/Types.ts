export interface ProductDataType {
  url: string;
  price: string;
  off: string;
  final_price: string;
  title: string;
  vms: string;
  category: string;
  barcode: string;
}

export interface ProductDataTypeWithWeight extends ProductDataType {
  weight: string;
}

export interface RPIWebsocketMessage {
  client: string;
  message_type: string;
  weight: string;
  image_url: string;
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
  keyboardModalOpen: boolean;
}

export interface RequestApiType {
  // weight: string;
  // image_address: string;
  url: string;
}

export interface SendDataToPrintType extends RequestApiType {
  weight: string;
  title: string;
  final_price: string;
  barcode: string;
}

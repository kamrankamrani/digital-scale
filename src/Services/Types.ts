export interface ScaleResponseType {
  url: string;
  raw_price: number;
  off: number;
  final_price: number;
  isDefault: boolean;
  client: string;
  weight: number;
  title: string;
}

export interface WebSocketType {
  socketUrl: string;
  connectionStatus: number;
}

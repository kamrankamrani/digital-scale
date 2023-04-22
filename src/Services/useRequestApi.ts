import { RequestApiType } from "./Types";
import { useState } from "react";

export function useRequestApi(url: string, data: RequestApiType) {
  const [apiData, setApiData] = useState("");
  return apiData;
}

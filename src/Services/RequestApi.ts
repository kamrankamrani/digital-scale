import axios from "axios";
import { RequestApiType, SendDataToPrintType } from "./Types";

export function RequestApi(props: RequestApiType) {
  console.log("requesting...");
  return new Promise((resolve, reject) => {
    axios
      .get(props.url)
      .then((res) => {
        console.log("get req res => ", res);
        resolve(res);
      })
      .catch((err) => {
        console.log("get req error => ", err);
        reject(err);
      });
  });
}

export function SendDataToPrint({ url, ...rest }: SendDataToPrintType) {
  console.log("sending data to print...");
  return new Promise((resolve, reject) => {
    axios
      .post(url, rest, { headers: { "Content-Type": "application/json" } })
      .then((res) => {
        console.log("post req res => ", res);
        resolve(res);
      })
      .catch((err) => {
        console.log("post req error => ", err);
        reject(err);
      });
  });
}

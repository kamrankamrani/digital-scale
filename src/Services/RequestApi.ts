import axios from "axios";
import { RequestApiType } from "./Types";

export function RequestApi(props: RequestApiType) {
  console.log("requesting...");
  return new Promise((resolve, reject) => {
    axios
      .get(props.url)
      .then((res) => {
        // console.log("get req res => ", res);
        resolve(res);
      })
      .catch((err) => {
        // console.log("get req error => ", err);
        reject(err);
      });
  });
}

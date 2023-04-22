import axios from "axios";
import { RequestApiType } from "./Types";

export function RequestApi(props: RequestApiType) {
  return new Promise((resolve, reject) => {
    axios
      .get(props.url)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

import { RequestApiType } from "./Types";

export function FetchImageRequest(props: RequestApiType) {
  return new Promise<File>((resolve, reject) => {
    fetch(props.url)
      .then((r) => r.blob())
      .then((blobFile) => {
        console.log("fetch req ", blobFile);
        resolve(new File([blobFile], "image.jpg", { type: blobFile.type }));
      })
      .catch((error) => {
        console.log("fetch error :", error);
        reject(error);
      });
  });
}

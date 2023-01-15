import { useRef, useEffect, useState } from "react";

export default function useSearchItems(
  searchValue: string,
  searchTimeOut = 1000
) {
  const timerRef = useRef<number | null>(null);
  const [fetchedData, setFetchedData] = useState<string>("");

  useEffect(() => {
    const timeref_ = timerRef.current;
    if (timeref_) {
      clearTimeout(timeref_);
    }
    if (searchValue) {
      //don't send req for empty string
      timerRef.current = setTimeout(() => {
        console.log("time to search!", searchValue);
        setFetchedData("data is fetched" + searchValue);
      }, searchTimeOut);
    }
  }, [searchValue]);

  useEffect(() => {
    const timeref_ = timerRef.current;
    return () => {
      if (timeref_) {
        clearTimeout(timeref_);
      }
    };
  }, []);

  return fetchedData;
}

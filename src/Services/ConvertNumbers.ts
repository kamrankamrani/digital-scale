export function PersianNumber(inputNum: number | string | undefined): string {
  if (inputNum === undefined) return "";
  if (typeof inputNum !== "string") {
    inputNum = inputNum.toString();
  }
  const length = inputNum.length;
  const persianNums = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let result = "";
  for (let i = 0; i < length; i++) {
    if (inputNum[i] >= "0" && inputNum[i] <= "9") {
      result += persianNums[parseInt(inputNum[i])];
    } else {
      result += inputNum[i];
    }
  }
  return result;
}

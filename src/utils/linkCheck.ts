import { horizontalCheck, verticalCheck } from "./locationCheck"

const linkCheck = (x: number, y: number) => {
  if (horizontalCheck(x, "link") && verticalCheck(y, "link")) {
    return true;
  } else return false
};

export default linkCheck;
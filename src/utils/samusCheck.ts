import { horizontalCheck, verticalCheck } from "./locationCheck"

const samusCheck = (x: number, y: number) => {
  if (horizontalCheck(x, "samus") && verticalCheck(y, "samus")) {
    return true;
  } else return false
};

export default samusCheck;
import { horizontalCheck, verticalCheck } from "./locationCheck"

const toadCheck = (x: number, y: number) => {
  if (horizontalCheck(x, "toad") && verticalCheck(y, "toad")) {
    return true;
  } else return false
};

export default toadCheck;
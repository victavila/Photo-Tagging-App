import { MouseEvent, useContext, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import background from "../images/gamecube-background.jpg";
import "../styles/Main.css";
import { DropdownContext } from "../contexts/DropdownContext";
import { DropdownContextProps } from "../types/types";


const Main = () => {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const {isDropdownOpen, setIsDropdownOpen} = useContext(DropdownContext) as DropdownContextProps;
  
  const imageClick = (e: MouseEvent<HTMLImageElement>): void => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;
    const width = e.currentTarget.width;
    const height = e.currentTarget.height;
    setXPosition(+(x / width).toFixed(2));
    setYPosition(+(y / height).toFixed(2));
    setIsDropdownOpen(!isDropdownOpen)
  };

  return (
    <main className="main">
      <img onClick={(e) => imageClick(e)} className="main__background" src={background} alt="gamecube background" />
      {isDropdownOpen ? <DropdownMenu x = {xPosition} y = {yPosition} />: <></>}
    </main>
  )
};

export default Main;
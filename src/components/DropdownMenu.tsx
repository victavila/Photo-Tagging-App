import link from "../images/link.png";
import samus from "../images/samus.png";
import toad from "../images/toad.png";
import "../styles/DropdownMenu.css";
import { DropdownMenuProps } from "../types/types";

const DropdownMenu = ({ x, y }: DropdownMenuProps) => {
  
  const style = {
    left: `${x*100 + 5}%`,
    top: `${y*100}%`
  }
  
  return (
    <div className="dropdown" style={style}>
      <div className="dropdown__character">
        <img src={link} alt="link" />
        <p>Link</p>
      </div>
      <div className="dropdown__character">
        <img src={samus} alt="samus" />
        <p>Samus</p>
      </div>
      <div className="dropdown__character">
        <img src={toad} alt="toad" />
        <p>Toad</p>
      </div>
    </div>
  )
};

export default DropdownMenu;
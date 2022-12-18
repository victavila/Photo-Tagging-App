import link from "../images/link.png";
import samus from "../images/samus.png";
import toad from "../images/toad.png";
import "../styles/DropdownMenu.css";

const DropdownMenu = () => {
  return (
    <div className="dropdown">
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
import link from "../images/link.png";
import samus from "../images/samus.png";
import toad from "../images/toad.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">Photo Tagging App</div>
      <div className="header__characters">
        <div className="header__character">
          <img src={link} alt="link" />
          <p>Link</p>
        </div>
        <div className="header__character">
          <img src={samus} alt="samus" />
          <p>Samus</p>
        </div>
        <div className="header__character">
          <img src={toad} alt="toad" />
          <p>Toad</p>
        </div>
      </div>
    </header>
  )
};

export default Header;
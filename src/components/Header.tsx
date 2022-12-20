import { useContext } from "react";
import { LinkContext } from "../contexts/LinkContext";
import { SamusContext } from "../contexts/SamusContext";
import { ToadContext } from "../contexts/ToadContext";
import link from "../images/link.png";
import samus from "../images/samus.png";
import toad from "../images/toad.png";
import "../styles/Header.css";
import { LinkContextProps, SamusContextProps, ToadContextProps } from "../types/types";

const Header = () => {
  const {wasLinkFound} = useContext(LinkContext) as LinkContextProps;
  const {wasSamusFound} = useContext(SamusContext) as SamusContextProps;
  const {wasToadFound} = useContext(ToadContext) as ToadContextProps;
  
  return (
    <header className="header">
      <div className="header__title">Photo Tagging App</div>
      <div className="header__characters">
        <div className={wasLinkFound ? "header__character character__found": "header__character"}>
          <img src={link} alt="link" />
          <p>Link</p>
        </div>
        <div className={wasSamusFound ? "header__character character__found": "header__character"}>
          <img src={samus} alt="samus" />
          <p>Samus</p>
        </div>
        <div className={wasToadFound ? "header__character character__found": "header__character"}>
          <img src={toad} alt="toad" />
          <p>Toad</p>
        </div>
      </div>
    </header>
  )
};

export default Header;
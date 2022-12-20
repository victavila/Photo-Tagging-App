import { useContext } from "react";
import { DropdownContext } from "../contexts/DropdownContext";
import { LinkContext } from "../contexts/LinkContext";
import { SamusContext } from "../contexts/SamusContext";
import { ToadContext } from "../contexts/ToadContext";
import link from "../images/link.png";
import samus from "../images/samus.png";
import toad from "../images/toad.png";
import "../styles/DropdownMenu.css";
import { DropdownContextProps, DropdownMenuProps, LinkContextProps, SamusContextProps, ToadContextProps } from "../types/types";
import linkCheck from "../utils/linkCheck";
import samusCheck from "../utils/samusCheck";
import toadCheck from "../utils/toadCheck";

const DropdownMenu = ({ x, y }: DropdownMenuProps) => {
  const {isDropdownOpen, setIsDropdownOpen} = useContext(DropdownContext) as DropdownContextProps;
  const {wasLinkFound, setWasLinkFound} = useContext(LinkContext) as LinkContextProps;
  const {wasSamusFound, setWasSamusFound} = useContext(SamusContext) as SamusContextProps;
  const {wasToadFound, setWasToadFound} = useContext(ToadContext) as ToadContextProps;

  const style = {
    left: `${x*100 + 5}%`,
    top: `${y*100}%`
  }

  const linkClicked = () => {
    if (linkCheck(x, y)) {
      setWasLinkFound(!wasLinkFound);
    };
    setIsDropdownOpen(!isDropdownOpen);
  };

  const samusClicked = () => {
    if (samusCheck(x, y)) {
      setWasSamusFound(!wasSamusFound);
      
    };
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toadClicked = () => {
    if (toadCheck(x, y)) {
      setWasToadFound(!wasToadFound);
    };
    setIsDropdownOpen(!isDropdownOpen);
  }
  
  return (
    <div className="dropdown" style={style}>
      {wasLinkFound ? <></>:
      <div onClick={linkClicked} className="dropdown__character">
        <img src={link} alt="link" />
        <p>Link</p>
      </div>
      }
      {wasSamusFound ? <></>:
      <div onClick={samusClicked} className="dropdown__character">
        <img src={samus} alt="samus" />
        <p>Samus</p>
      </div>
      }
      {wasToadFound ? <></>:
      <div onClick={toadClicked} className="dropdown__character">
        <img src={toad} alt="toad" />
        <p>Toad</p>
      </div>
      }
    </div>
  )
};

export default DropdownMenu;
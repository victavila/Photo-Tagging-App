import { ChangeEvent, useContext, useState } from "react";
import { LinkContext } from "../contexts/LinkContext";
import { SamusContext } from "../contexts/SamusContext";
import { ToadContext } from "../contexts/ToadContext";
import { LinkContextProps, SamusContextProps, ToadContextProps } from "../types/types";
import "../styles/GameOver.css";

const GameOver = () => {
  const {wasLinkFound} = useContext(LinkContext) as LinkContextProps;
  const {wasSamusFound} = useContext(SamusContext) as SamusContextProps;
  const {wasToadFound} = useContext(ToadContext) as ToadContextProps;
  const [name, setName] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  
  return (
    <>
      {wasLinkFound && wasSamusFound && wasToadFound ? 
      <div className="gameover">
        <div className="gameover__submission">
          <div className="submission__time">
            <div>You finished in 12.5 seconds!</div>
          </div>
          <div className="submission__input">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" maxLength={24} value={name} onChange={onChange}></input>
          </div>
          <div className="submission__buttons">
            <button className="btn btn--gray">Cancel</button>
            <button className="btn btn--red">Submit</button>
          </div>
        </div>
      </div>:<></>}
    </>
  )
};

export default GameOver;
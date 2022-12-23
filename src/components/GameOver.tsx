import { ChangeEvent, useContext, useState } from "react";
import { LinkContext } from "../contexts/LinkContext";
import { SamusContext } from "../contexts/SamusContext";
import { ToadContext } from "../contexts/ToadContext";
import { LeaderboardProps, LinkContextProps, SamusContextProps, ToadContextProps } from "../types/types";
import storeData from "../utils/storeData";
import "../styles/GameOver.css";
import getLeaderboard from "../utils/getLeaderboard";

const GameOver = () => {
  const {wasLinkFound, setWasLinkFound} = useContext(LinkContext) as LinkContextProps;
  const {wasSamusFound, setWasSamusFound} = useContext(SamusContext) as SamusContextProps;
  const {wasToadFound, setWasToadFound} = useContext(ToadContext) as ToadContextProps;
  const [name, setName] = useState("");
  const [leaderboard, setLeaderboard] = useState<LeaderboardProps[]>([]);
  const [leaderboardActive, setLeaderboardActive] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const onSubmit = () => {
    setLeaderboardActive(!leaderboardActive);
    storeData(name, 0);
    setName("");
    const leaderboard = getLeaderboard();
    leaderboard.then(result => {
      setLeaderboard(result);
    });
  }

  const onRestart = () => {
    setLeaderboardActive(!leaderboardActive);
    setWasLinkFound(!wasLinkFound);
    setWasSamusFound(!wasSamusFound);
    setWasToadFound(!wasToadFound);
  }
  
  return (
    <>
      {wasLinkFound && wasSamusFound && wasToadFound ? 
      <div className="gameover">
        {!leaderboardActive ? <div className="gameover__submission">
          <div className="submission__time">
            <div>You finished in 12.5 seconds!</div>
          </div>
          <div className="submission__input">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" maxLength={24} value={name} onChange={onChange}></input>
          </div>
          <div className="submission__buttons">
            <button className="btn btn--gray">Cancel</button>
            <button onClick={onSubmit} className="btn btn--red">Submit</button>
          </div>
        </div>:
        <div className="leaderboard">
          <div className="leaderboard__container">
            <div>High Scores</div>
            {leaderboard.map((user, index) => (
              <div key={index} className="user">
                <div>{index + 1} {user.name}</div>
                <div>{user.time}</div>
              </div>
            ))}
          </div>
          <div className="restart">
            <button onClick={onRestart} className="btn">RESTART</button>
          </div>
        </div>}
      </div>:<></>}
    </>
  )
};

export default GameOver;
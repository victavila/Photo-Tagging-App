import { ChangeEvent, useContext, useState } from "react";
import { LinkContext } from "../contexts/LinkContext";
import { SamusContext } from "../contexts/SamusContext";
import { ToadContext } from "../contexts/ToadContext";
import { LeaderboardProps, LinkContextProps, SamusContextProps, StartGameContextProps, TimeContextProps, ToadContextProps } from "../types/types";
import storeData from "../utils/storeData";
import "../styles/GameOver.css";
import getLeaderboard from "../utils/getLeaderboard";
import { TimeContext } from "../contexts/TimeContext";
import { StartGameContext } from "../contexts/StartGameContext";

const GameOver = () => {
  const {wasLinkFound, setWasLinkFound} = useContext(LinkContext) as LinkContextProps;
  const {wasSamusFound, setWasSamusFound} = useContext(SamusContext) as SamusContextProps;
  const {wasToadFound, setWasToadFound} = useContext(ToadContext) as ToadContextProps;
  const {time, setTime} = useContext(TimeContext) as TimeContextProps;
  const {hasGameStarted, setHasGameStarted} = useContext(StartGameContext) as StartGameContextProps;
  const [name, setName] = useState("");
  const [leaderboard, setLeaderboard] = useState<LeaderboardProps[]>([]);
  const [leaderboardActive, setLeaderboardActive] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const onSubmit = () => {
    setLeaderboardActive(!leaderboardActive);
    storeData(name, time);
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
    setTime(0);
    setHasGameStarted(!hasGameStarted);
  }
  
  return (
    <>
      {wasLinkFound && wasSamusFound && wasToadFound ? 
      <div className="gameover">
        {!leaderboardActive ? <div className="gameover__submission">
          <div className="submission__time">
            <div>You finished in {(time/100)} seconds!</div>
          </div>
          <div className="submission__input">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" maxLength={10} value={name} onChange={onChange}></input>
          </div>
          <div className="btn__container">
            <button onClick={onSubmit} className="btn btn--red">Submit</button>
          </div>
        </div>:
        <div className="leaderboard">
          <div className="leaderboard__container">
            <div className="leaderboard__title">High Scores</div>
            <div className="leaderboard__header">
              <div>Placement</div>
              <div>Name</div>
              <div>Time (seconds)</div>
            </div>
            {leaderboard.map((user, index) => (
              <div key={index} className="user">
                <div>{index + 1}.</div>
                <div>{user.name}</div>
                <div>{(user.time/100).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="restart">
            <button onClick={onRestart} className="btn btn--large">RESTART</button>
          </div>
        </div>}
      </div>:<></>}
    </>
  )
};

export default GameOver;
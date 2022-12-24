import { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { StartGameContext } from "../contexts/StartGameContext";
import "../styles/StartGame.css";
import { StartGameContextProps } from "../types/types";

const StartGame = () => {
  const {hasGameStarted, setHasGameStarted} = useContext(StartGameContext) as StartGameContextProps;
  
  return (
    <>{hasGameStarted ? <></>:
    <div className="start">
      <div className="start__container">
          <FaPlay onClick={() => setHasGameStarted(!hasGameStarted)} className="icon">
          </FaPlay>
          <div className="text__container">
            <span className="icon__text">START GAME</span>
            <span className="icon__text"> Find the characters as fast as you can!</span>
          </div>
      </div>
    </div>}
    </>
  )
};

export default StartGame;
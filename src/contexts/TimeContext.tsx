import { useState, createContext, ReactNode, useContext, useEffect } from "react";
import { LinkContextProps, SamusContextProps, StartGameContextProps, TimeContextProps, ToadContextProps } from "../types/types";
import { LinkContext } from "./LinkContext";
import { SamusContext } from "./SamusContext";
import { StartGameContext } from "./StartGameContext";
import { ToadContext } from "./ToadContext";

const TimeContext = createContext<TimeContextProps | null>(null);

const TimeProvider = ({children}: {children: ReactNode}) => {
  const [time, setTime] = useState(0);
  const {wasLinkFound} = useContext(LinkContext) as LinkContextProps;
  const {wasSamusFound} = useContext(SamusContext) as SamusContextProps;
  const {wasToadFound} = useContext(ToadContext) as ToadContextProps;
  const {hasGameStarted} = useContext(StartGameContext) as StartGameContextProps;

  useEffect(() => {
    let interval: string | number | NodeJS.Timer | undefined = undefined;
    if ((!wasLinkFound || !wasSamusFound || !wasToadFound) && hasGameStarted) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    }
  }, [wasLinkFound, wasSamusFound, wasToadFound, hasGameStarted]);

  return (
    <TimeContext.Provider value={{time, setTime}}>
      {children}
    </TimeContext.Provider>
  )
};

export {TimeContext, TimeProvider};
import { useState, createContext, ReactNode } from "react";
import { LinkContextProps } from "../types/types";

const LinkContext = createContext<LinkContextProps | null>(null);

const LinkProvider = ({children}: {children: ReactNode}) => {
  const [wasLinkFound, setWasLinkFound] = useState(false);

  return (
    <LinkContext.Provider value={{wasLinkFound, setWasLinkFound}}>
      {children}
    </LinkContext.Provider>
  )
};

export {LinkContext, LinkProvider};
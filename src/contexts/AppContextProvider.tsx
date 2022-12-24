import { ReactNode } from "react";
import { DropdownProvider } from "../contexts/DropdownContext";
import { LinkProvider } from "../contexts/LinkContext";
import { SamusProvider } from "../contexts/SamusContext";
import { TimeProvider } from "../contexts/TimeContext";
import { ToadProvider } from "../contexts/ToadContext";
import { StartGameProvider } from "./StartGameContext";

const AppContextProvider = ({ children }: {children: ReactNode}) => {
  return (
    <DropdownProvider>
      <LinkProvider>
        <SamusProvider>
          <ToadProvider>
            <StartGameProvider>
              <TimeProvider>
                {children}
              </TimeProvider>
            </StartGameProvider>
          </ToadProvider>
        </SamusProvider>
      </LinkProvider>
    </DropdownProvider>
  )
};

export default AppContextProvider;
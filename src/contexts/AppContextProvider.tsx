import { ReactNode } from "react";
import { DropdownProvider } from "../contexts/DropdownContext";
import { LinkProvider } from "../contexts/LinkContext";
import { SamusProvider } from "../contexts/SamusContext";
import { TimeProvider } from "../contexts/TimeContext";
import { ToadProvider } from "../contexts/ToadContext";

const AppContextProvider = ({ children }: {children: ReactNode}) => {
  return (
    <DropdownProvider>
      <LinkProvider>
        <SamusProvider>
          <ToadProvider>
            <TimeProvider>
              {children}
            </TimeProvider>
          </ToadProvider>
        </SamusProvider>
      </LinkProvider>
    </DropdownProvider>
  )
};

export default AppContextProvider;
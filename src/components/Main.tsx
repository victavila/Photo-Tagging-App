import DropdownMenu from "./DropdownMenu";
import background from "../images/gamecube-background.jpg";
import "../styles/Main.css"


const Main = () => {
  return (
    <main className="main">
      <img className="main__background" src={background} alt="gamecube background" />
      <DropdownMenu />
    </main>
  )
};

export default Main;
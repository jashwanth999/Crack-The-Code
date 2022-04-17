import "./App.css";
import Radium from "radium";
import CTCNavBar from "./users/Helpers/CTCNavBar";
import RoutesComponent from "./users/Helpers/Routes";
function App() {
  return (
    <div className="App">
      <CTCNavBar />
      <br />
      <br />
      <br />
      <RoutesComponent />
    </div>
  );
}

export default Radium(App);

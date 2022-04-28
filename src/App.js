import "./App.css";
import Radium from "radium";
import CTCNavBar from "./users/Helpers/CTCNavBar";
import RoutesComponent from "./users/Helpers/Routes";
import Footer from "./users/Components/Footer";

function App() {
  return (
    <div className="App">
      <CTCNavBar />
      <div style={{ marginTop: 58 }}>
        <RoutesComponent />
      </div>
      <Footer />
    </div>
  );
}

export default Radium(App);

import "./App.css";
import Radium from "radium";
import CTCNavBar from "./users/Helpers/CTCNavBar";
import RoutesComponent from "./users/Helpers/Routes";
import Footer from "./users/Components/Footer";
import { Divider } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CTCNavBar />
      <div style={{ marginTop: 58 }}>
        <RoutesComponent />
      </div>
      <br />
      <Divider />
      {/* <Footer /> */}
    </div>
  );
}

export default Radium(App);

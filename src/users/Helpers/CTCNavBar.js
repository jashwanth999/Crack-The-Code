import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { StyleRoot } from "radium";
import { useDispatch, useSelector } from "react-redux";
import { tiggerDrawer } from "../../Api/actions";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import useWindowDimensions from "./useWindowDimensions";
import CloseIcon from "@mui/icons-material/Close";
export default function CTCNavBar() {
  let dimensions = useWindowDimensions();
  const [searchChecked, setSearchChecked] = React.useState(true);
  const state = useSelector((state) => state.open.open);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    dispatch(tiggerDrawer(!state));
  };
  //console.log(searchChecked);

  return (
    <StyleRoot>
      <AppBar
        style={{
          backgroundColor: "rgb(0, 30, 60)",
          textAlign: "center",
        }}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            onClick={toggleDrawer}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {searchChecked || dimensions.width > 600 ? (
            <div style={titleDiv}>
              <img
                style={{ width: 40, height: 40 }}
                alt=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD9klEQVRoge2YQW8bRRiGn9m1qGOlUkRjUjtNI9RDBIRLQZBUoSgo/Qk9IoRyC46cE+mt7q2+pWoccSkIceQnBBGoAg0IuBCIckAoSmPXhKAKIsdRs/txqG3Zu7Pe3XgNquT3lm9nv30f78zk3YGeeuqpp/9T6r94SCYlXwNXm2sCbxdK6n6nvY1OG/jpOmIClx1lS074KYr+XQc4P8w40O8ob67sq8Mo+ncdAJs3NNXvo2rfdQCBN11FxXdR9e/+G9AAGNYzAvDhoJwFXmquCfxTKrMV1TNCAWRSks2m5WLQ8dUYrwNmS1Hxw+coSzc+m5aLmZRkw3gKDJBJSw5YsoT7mSF5Mcg9tuGePkr002cuLSMWfAkszZ+X20F9BQLIpCWHcLP25ygGa4EgxL0DiWYHmkvLiAFrCJcARLEYFMIXwGG+rlEMPgnQ3wVgmW4AQ/isbr4uUSzW3npbtQXwMA+wqyxm2907PywXgGFH+eFHD9Wec6zAe8DvribCTb834QngY3767h/qt3aNxdbs/+jnf6GkdgSm0UD4TSctQKfmaw8OvIDh9BAugNmh6u1OzdfMho4QfhCzyeqSs94CMJXYXv32z58XK1bVOS6U+VoCfc1RtiyLH/3u9YI4so7Z+GszeyW+9UALMJXYXt2r7M9UrWMeHGzSBBHKPMDgBV7BkUCV8EvQBOqEOLKO2ah5KlUPJpohDIAr8a2v9ir7M/ViA+LkqBTWPEDMcs9/CRng6hCVk+ruRusP2gJhABiG8SRMcz91O4ECKGWcQA1gvTJ2bTiR/KJ+MW6eYfLcOIlYX0pM1uZfkEtejTzUcQL9ICWjCtYSsfjIxLlxEma8cS3dl1z/5mjsLXB8E08ltlcPjv+emXTcQIh1MJeUfiPGY1pD3GG5xIBXiPMyDzTiSn0dDDx3tmEeHLvQemXs2uTgq3mHeYCRoG/CMDUJFO8EGsQ8QJ95honnx+80m3cBAHxcjt9AcUvTOxCEhEigQc3XeuTv7ccXnHXtf+LlosqJ4obmki+EEjeAHWAB+5m/+0jp/HhnoUJR5U8JESiBNqudeYScl3nwSaOFosq3mU73nMUwCbRZCj5FZ15xa/mR0j2/Id/vAY/ptIPN+86xYRJos2zFuyhadzght1xUnX0P1OWYTjvYTC+XlS6/uwOc8j8DWimqXRumGxBCzu+XryvwN3GhqPLAgqm4qjX/1Kx7B7KD7UArRbVrwjvAQlDzTx8Zka4j5lCKx7SGOMs+YSCqY0SdIjsX6jSBnlaRAUSRQE+jKE/m3EcoARZwp4oMQPsNHOEZqJciAZhLSj/Cy47yYbnMr1H0b6dIADpNoD311FNPz67+BSmUy2+Mz/pSAAAAAElFTkSuQmCC"
              />
              <h3
                onClick={() => {
                  navigate("/");
                }}
                style={{
                  color: "#1B93B4",
                  fontWeight: "bold",
                  fontSize: 20,
                  padding: 6,
                  margin: 0,
                }}
              >
                Crack The Company
              </h3>
            </div>
          ) : (
            <></>
          )}

          {searchChecked ? (
            <IconButton
              onClick={() => {
                setSearchChecked(!searchChecked);
              }}
              style={iconButton}
            >
              <SearchIcon style={{ color: "white" }} />
            </IconButton>
          ) : (
            <div style={searchDiv}>
              <input type="text" placeholder="search" style={input} />
              <IconButton
                onClick={() => {
                  setSearchChecked(!searchChecked);
                }}
                style={{}}
              >
                <CloseIcon style={{ color: "white" }} />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
    </StyleRoot>
  );
}
const iconButton = {
  marginRight: 5,
  paddingRight: 5,
  position: "absolute",
  right: 10,
  marginTop: 5,
};
const titleDiv = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  "@media (max-width: 600px)": {
    position: "absolute",
  },
};

const searchDiv = {
  backgroundColor: "rgba(242, 243, 244,0.2)",
  borderRadius: 5,
  padding: 1,
  display: "flex",
  flexDirection: "row",
  flex: 1,
  position: "absolute",
  right: 10,
  alignItems: "center",
  justifyContent: "space-around",
  transition: "all 4s linear",
  "@media (max-width: 600px)": {
    width: "80%",
  },
};

const input = {
  outline: "none",
  border: "none",
  backgroundColor: "transparent",
  color: "white",
  margin: 0,
  padding: 3,
  fontSize: 15,
  paddingLeft: 6,
};

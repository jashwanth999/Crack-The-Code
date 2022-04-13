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
              <span
                onClick={() => {
                  navigate("/");
                }}
                style={{
                  color: "#1B93B4",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Crack The Company
              </span>
            </div>
          ) : (
            <></>
          )}

          {searchChecked ? (
            <IconButton
              onClick={() => {
                setSearchChecked(!searchChecked);
              }}
              style={{
                marginRight: 5,
                paddingRight: 5,
                position: "absolute",
                right: 10,
              }}
            >
              <SearchIcon style={{ color: "white" }} />
            </IconButton>
          ) : (
            <div style={searchDiv}>
              <input placeholder="search" style={input} />
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
const titleDiv = {
  width: "100%",
  textAlign: "center",
  position: "absolute",
};

const searchDiv = {
  backgroundColor: "rgba(242, 243, 244,0.2)",
  borderRadius: 8,
  padding: 1,
  display: "flex",
  flexDirection: "row",
  flex: 1,
  position: "absolute",
  right: 10,
  zIndex: 1,
  "@media (max-width: 600px)": {},
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

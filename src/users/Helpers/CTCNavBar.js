import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { StyleRoot } from "radium";
import { useDispatch, useSelector } from "react-redux";
import { tiggerDrawer } from "../../Api/actions";
import { useNavigate } from "react-router-dom";
import "../../App.css";
export default function CTCNavBar() {
  const state = useSelector((state) => state.open.open);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    dispatch(tiggerDrawer(!state));
  };

  return (
    <StyleRoot>
      <AppBar
        style={{
          backgroundColor: "#212F3C",
          textAlign: "center",

          zIndex: 1,
        }}
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
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
          <div style={titleDiv}>
            <img
              style={{ width: 40, height: 40, objectFit: "contain" }}
              alt=""
              src={require("../../logo (3).png")}
            />
            <h3
              onClick={() => {
                navigate("/");
              }}
              style={titleText}
            >
              Crack The Company
            </h3>
          </div>
        </Toolbar>
      </AppBar>
    </StyleRoot>
  );
}

const titleText = {
  color: "#1B93B4",
  fontWeight: "bold",
  fontSize: 20,
  padding: 6,
  margin: 0,
  cursor: "pointer",
};
const iconButton = {
  marginRight: 5,
  paddingRight: 5,
  position: "absolute",
  right: 10,
  marginTop: 5,
  flex: 1,
  display: "flex",
};
const titleDiv = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  "@media (max-width: 600px)": {
    position: "absolute",
    left: 66,
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

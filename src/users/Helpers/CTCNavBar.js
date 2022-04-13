import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { StyleRoot } from "radium";
import { useDispatch, useSelector } from "react-redux";
import { tiggerDrawer } from "../../Api/actions";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import useWindowDimensions from "./useWindowDimensions";
import CloseIcon from "@mui/icons-material/Close";

const ResponsiveStyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon

    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "@media (max-width: 600px)": {
    display: "none",
  },

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon

    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function CTCNavBar() {
  let dimensions = useWindowDimensions();
  const [searchChecked, setSearchChecked] = React.useState(false);
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
            <>
              <Typography
                sx={{ flexGrow: 1 }}
                variant="h6"
                noWrap
                component="div"
              >
                <span
                  onClick={() => {
                    navigate("/");
                  }}
                  style={{ color: "#1B93B4", fontWeight: "bold" }}
                >
                  Crack The Company
                </span>
              </Typography>
              <div style={searchDiv}>
                <IconButton
                  onClick={() => {
                    setSearchChecked(!searchChecked);
                  }}
                  style={{ marginRight: 5, paddingRight: 5 }}
                >
                  <SearchIcon style={{ color: "white" }} />
                </IconButton>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </>
          ) : (
            <div style={searchDiv}>
              <ResponsiveStyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton
                style={{ marginRight: 5, paddingRight: 5 }}
                onClick={() => {
                  setSearchChecked(!searchChecked);
                }}
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

const searchDiv = {
  backgroundColor: "rgba(242, 243, 244,0.2)",
  borderRadius: 5,
  padding: 2,
  position: "absolute",
  right: 5,
  "@media (max-width: 600px)": {
    backgroundColor: "transparent",
    position: "relative",
    right: -5,
    paddingLeft: 6,
  },
};

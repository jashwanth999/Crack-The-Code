import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { StyleRoot } from "radium";
import LeftDrawer from "./LeftDrawer";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";

/*const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
*/
export default function CTCNavBar() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };
  return (
    <StyleRoot>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ backgroundColor: "rgb(0, 30, 60)" }} position="static">
          <Toolbar>
            <IconButton
            //  toggleDrawer={toggleDrawer}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              href="/"
              onClick={() => {
                // navigate("/");
              }}
              style={{ cursor: "pointer" }}
              component="div"
              sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
            >
              <Link
                href="/"
                style={{ textAlign: "center", textDecoration: "none" }}
              >
                <span style={{ color: "#1B93B4", fontWeight: "bold" }}>
                  Crack
                </span>{" "}
                <span style={{ color: "#1B93B4", fontWeight: "bold" }}>
                  The
                </span>
                <span style={{ color: "#1B93B4", fontWeight: "bold" }}>
                  {" "}
                  Code
                </span>
              </Link>
            </Typography>

            {/*<Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                style={menu}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
  </Search>*/}
          </Toolbar>
        </AppBar>
      </Box>
    </StyleRoot>
  );
}
const menu = {
  "@media (max-width: 500px)": {},
};
// we found the all docs what we need

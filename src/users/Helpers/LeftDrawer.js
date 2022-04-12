import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { tiggerDrawer } from "../../Api/actions";
import { ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function truncate(string, length) {
  if (string.length > length) return string.substring(0, length) + "...";
  else return string;
}
export default function LeftDrawer() {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(0);
  const state = useSelector((state) => state.open.open);
  const listData = useSelector((state) => state.list.list);
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    dispatch(tiggerDrawer(!state));
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#212F3C",
        height: "100vh",

        textAlign: "left",
        overflowY: "scroll",
      }}
      role="presentation"
    >
      <div style={headDiv}>
        <img
          style={image}
          alt=""
          src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
        />
        <h3 style={{ color: "white", textAlign: "center" }}>
          LeetCode Problems
        </h3>
      </div>
      <List>
        {listData.map((val, index) => (
          <ListItemButton
            key={index}
            component="a"
            onClick={() => {
              navigate(`/leetcode-solutions/${val.replace(/ /g, "-")}`);
              setChecked(index);
              toggleDrawer();
            }}
          >
            <ListItemText
              style={{ color: checked === index ? "#596ABC" : "white" }}
            >
              {truncate(val, 20)}
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"left"}
          open={state}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
const headDiv = {
  display: "flex",
  flex: 1,
};
const image = {
  heigth: 25,
  width: 25,
  objectFit: "contain",
  margin: 6,
};

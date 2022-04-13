import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { tiggerDrawer } from "../../Api/actions";
import { ListItemButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

function truncate(string, length) {
  if (string.length > length) return string.substring(0, length) + "...";
  else return string;
}
export default function LeftDrawer(props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const text = id?.replace(/-/g, " ");

  const state = useSelector((state) => state.open.open);
  const listData = useSelector((state) => state.list.list);
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    dispatch(tiggerDrawer(!state));
  };

  const list = (anchor) => (
    <Box sx={rootDivBox} role="presentation">
      <div style={headDiv}>
        <h3 style={{ color: "#1B93B4", textAlign: "center" }}>{props.title}</h3>
      </div>
      <List>
        {listData.map((val, index) => (
          <ListItemButton
            key={index}
            component="a"
            onClick={() => {
              navigate(`/leetcode-solutions/${val.replace(/ /g, "-")}`);
              toggleDrawer();
            }}
          >
            <ListItemText style={{ color: text === val ? "#596ABC" : "white" }}>
              {truncate(val, 23)}
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
const rootDivBox = {
  width: 250,
  backgroundColor: "#212F3C",
  height: "100vh",
  textAlign: "left",
  overflowY: "scroll",
};
const headDiv = {
  display: "flex",
  flex: 1,
  justifyContent: "center",
};

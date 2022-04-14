import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useDispatch, useSelector } from "react-redux";
import { tiggerDrawer } from "../../Api/actions";

export default function LeftDrawer(props) {
  const state = useSelector((state) => state.open.open);
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    dispatch(tiggerDrawer(!state));
  };
  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"left"}
          open={state}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          <Box sx={rootDivBox} role="presentation">
            {props.component}
          </Box>
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

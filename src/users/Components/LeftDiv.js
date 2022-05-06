import React from "react";
import { ListItemButton, ListItemText, Typography } from "@mui/material";
export default function LeftDiv(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ color: "#1B93B4" }}>{props.title}</h3>
      {props.list.map((val, index) => {
        return (
          <ListItemButton
            key={index}
            component="a"
            onClick={() => {
              props.navigate(`/${props.url}/${val.replace(/ /g, "-")}`);
              document.title = val.replace(/-/g, " ");
            }}
          >
            <ListItemText
              style={{
                color:
                  props.text === val.replace(/-/g, " ") ? "#596ABC" : "white",
              }}
            >
              <Typography style={{ fontWeight: "bold", fontSize: 15 }}>
                {" "}
                {props.truncate(val.replace(/-/g, " "), 25)}
              </Typography>
            </ListItemText>
          </ListItemButton>
        );
      })}
    </div>
  );
}

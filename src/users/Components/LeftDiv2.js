import React from "react";
import { ListItemButton, ListItemText, Typography } from "@mui/material";
export default function LeftDiv2(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ color: "#1B93B4" }}>{props.title}</h3>
      {props.list.map((val, index) => {
        return (
          <ListItemButton
            key={index}
            component="a"
            onClick={() => {
              props.navigate(`${val.url}`);
              document.title = val.text.replace(/-/g, " ");
            }}
          >
            <ListItemText
              style={{
                color:
                  props.text === val.text.replace(/-/g, " ")
                    ? "#596ABC"
                    : "white",
              }}
            >
              <Typography style={{ fontWeight: "bold", fontSize: 15 }}>
                {" "}
                {props.truncate(val.text.replace(/-/g, " "), 25)}
              </Typography>
            </ListItemText>
          </ListItemButton>
        );
      })}
    </div>
  );
}

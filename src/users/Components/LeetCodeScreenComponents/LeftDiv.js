import React from "react";
import { ListItemButton, ListItemText, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function LeftDiv(props) {
  const { id } = useParams();
  const text = id?.replace(/-/g, " ");

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ color: "#1B93B4" }}>{props.title}</h3>
      {props.list.map((val, index) => {
        return (
          <ListItemButton
            key={index}
            component="a"
            onClick={() => {
              props.navigate(`/leetcode-solutions/${val.replace(/ /g, "-")}`);
            }}
          >
            <ListItemText
              style={{
                color: text === val ? "#596ABC" : "white",
              }}
            >
              <Typography style={{ fontWeight: "bold", fontSize: 15 }}>
                {" "}
                {props.truncate(val, 25)}
              </Typography>
            </ListItemText>
          </ListItemButton>
        );
      })}
    </div>
  );
}

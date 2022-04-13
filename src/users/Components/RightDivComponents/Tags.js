import { Typography } from "@mui/material";
import React from "react";

export default function Tags(props) {
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: 5 }}>
      {props.problemData?.tags?.map((tag, index) => {
        return (
          <span
            key={index}
            style={{ ...spanStyle, backgroundColor: props.colorList[tag] }}
          >
            {" "}
            <Typography style={{ fontWeight: "bold" }}> {tag}</Typography>
          </span>
        );
      })}
    </div>
  );
}
const spanStyle = {
  padding: 8,
  margin: 5,
  borderRadius: 5,
  color: "white",
};

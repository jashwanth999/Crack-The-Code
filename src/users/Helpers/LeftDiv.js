import React, { useState } from "react";
import { ListItemButton, ListItemText} from "@mui/material";


export default function LeftDiv(props) {
  const [checked, setChecked] = useState(0);
  
  return (
    <div>
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

      {props.list.map((val, index) => {
        return (
          <ListItemButton
            key={index}
            component="a"
            onClick={() => {
              props.navigate(`/leetcode-solutions/${val.replace(/ /g, "-")}`);
              setChecked(index);
            }}
          >
            <ListItemText
              style={{ color: checked === index ? "#596ABC" : "white" }}
            >
              {props.truncate(val, 20)}
            </ListItemText>
          </ListItemButton>
        );
      })}
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

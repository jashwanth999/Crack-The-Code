import * as React from "react";
import { Button, Divider, Typography } from "@mui/material";


export default function FieldCard(props) {


  return (
    <div style={rootDiv}>
      <div style={headDiv}>
        <img
          style={image}
          alt=""
          src={props.imageUrl}
        />
        <h3> {props.title}</h3>
      </div>
      <Typography >
        {props.description}
      
      
      </Typography>
      <Button
        onClick={() => {
          props.navigate(`${props.url}`);
        }}
        style={{
          color: "#2ECC71",
          fontWeight: "bold",
        }}
        variant="text"
      >
        {" "}
        Click here
      </Button>
      <Divider style={{ color: "grey", height: 4 }} />
    </div>
  );
}

const rootDiv = {
  margin: 10,
};
const headDiv = {
  display: "flex",
  flex: 1,
  alignItems: "center",
};

const image = {
  heigth: 26,
  width: 26,
  objectFit: "contain",
  borderRadius: 5,
  padding: 4,
  marginRight: 3,
 
};

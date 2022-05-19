import * as React from "react";
import { Button, Divider, Typography } from "@mui/material";

export default function ArticleCard(props) {
  return (
    <div style={rootDiv}>
      <div style={headDiv}>
        <h2 style={{ margin: 4 }}> {props.title}</h2>
      </div>
      <Typography style={{ margin: 4, fontSize: 17,fontFamily:'Roboto Condensed'}}>
        {props.description}
      </Typography>
      <Button
        onClick={() => {
          props.navigate(`${props.url}`);
          document.title = props.title;
        }}
        style={{
          color: "#1B93B4",
          fontWeight: "bold",
        }}
        variant="text"
      >
        {" "}
        Continue
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

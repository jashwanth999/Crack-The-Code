import React from "react";

export default function CenterImage(props) {
  return (
    <div style={rootDiv}>
      <img style={image} alt="" src={props.image} />
    </div>
  );
}
const rootDiv = {
  margin: 10,
  display: "flex",
  justifyContent: "center",
};
const image = {
  objectFit: "contain",
  minWidth: 340,
  maxWidth: 540,
  maxHeight: 300,
};

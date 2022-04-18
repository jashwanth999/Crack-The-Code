import React, { useEffect, useState } from "react";
import { ListItemButton, ListItemText, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ExpandMore } from "@mui/icons-material";
export default function LeftTitleList(props) {
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    if (props.index === 0) setExpand(true);
  }, [props.index]);

  return (
    <div>
      <ListItemButton
        component="a"
        onClick={() => {
          setExpand(!expand);
        }}
      >
        <ListItemText
          style={{
            color: "#58D68D",
          }}
        >
          <Typography style={{ fontWeight: "bold", fontSize: 15 }}>
            {" "}
            {props.truncate(props.title, 26)}
          </Typography>
        </ListItemText>
        {expand ? (
          <ExpandMore
            style={{
              color: "#58D68D",
            }}
          />
        ) : (
          <ChevronRightIcon
            style={{
              color: "#58D68D",
            }}
          />
        )}
      </ListItemButton>
      <div style={{ paddingLeft: 20 }}>
        {expand &&
          props.subList.map((val, index) => {
            return (
              <ListItemButton
                key={index}
                onClick={() => {
                  props.navigate(
                    `/cs-fundamentals/${props.title.replace(
                      / /g,
                      "-"
                    )}/${val.replace(/ /g, "-")}`
                  );
                }}
                component="a"
              >
                <ListItemText
                  style={{
                    color: props.subTopicName === val ? "#596ABC" : "white",
                  }}
                >
                  <Typography style={{ fontWeight: "bold", fontSize: 15 }}>
                    {" "}
                    {props.truncate(val, 20)}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            );
          })}
      </div>
    </div>
  );
}

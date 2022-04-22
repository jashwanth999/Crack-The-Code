import React from "react";
import { useParams } from "react-router-dom";
import LeftTitleList from "./LeftDivComponents/LeftTitleList";

const list = [
  {
    name: "OOPS Concept",
    subList: [
      "Class and Objects",
      "Abstraction",
      "Encapsulation",
      "Polymorphism",
      "Inheritance",
    ],
  },
  {
    name: "Operating Systems",
    subList: [
      "Introduction",
      "Process",
      "States of Process",
      "Thread",
      "Process vs Thread",
      "Context Switching",
      "Paging",
      "Thrashing",
    ],
  },
  {
    name: "DBMS",
    subList: ["Introduction", "Keys", "Normalization", "ACID properities"],
  },
  {
    name: "Computer Network",
    subList: ["Topology", "OSI Model", "IPV4 and IPV6", "TCP Model"],
  },
];

export default function LeftDiv(props) {
  const { subjectName, subTopicName } = useParams();
  const subName = subjectName?.replace(/-/g, " ");
  const subTopName = subTopicName?.replace(/-/g, " ");
  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ color: "#1B93B4" }}>{props.title}</h3>

      {list.map((val, index) => {
        return (
          <LeftTitleList
            key={index}
            index={index}
            truncate={props.truncate}
            title={val.name}
            subList={val.subList}
            subjectName={subName}
            subTopicName={subTopName}
            navigate={props.navigate}
          />
        );
      })}
    </div>
  );
}

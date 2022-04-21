import { StyleRoot } from "radium";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LeftDrawer from "../Helpers/LeftDrawer";
import LeftDiv from "../Components/CSfundComponents/LeftDiv";
import { truncate } from "../Helpers/helpersData";
import RightDiv from "../Components/RightDiv";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Api/Firebase";
import { tools } from "../Helpers/EdtiorTools";
export default function ComputerScienceFundamentals() {
  const navigate = useNavigate();
  const { subjectName, subTopicName } = useParams();
  const [loading, setLoading] = useState(false);
  const [problemData, setProblemData] = useState(null);

  //const text = id.replace(/ /g, " ");
  //const transformedText = `${text[0]}. ${text.substring(2).replace(/-/g, " ")}`;
  useEffect(() => {
    setLoading(true);
    if (subTopicName) {
      const unsub = onSnapshot(
        doc(db, "CS-fundamentals", subjectName, "subtopics", subTopicName),
        (doc) => {
          setProblemData(doc.data());
          setLoading(false);
        }
      );
      return unsub;
    }
  }, [subTopicName, subjectName]);


  return (
    <StyleRoot>
      <div className="App" style={rootDiv}>
        <div className="leftDiv" style={leftDiv}>
          <LeftDiv
            title={"CS Fundamentals"}
            truncate={truncate}
            navigate={navigate}
          />
        </div>
        <div className="rightDiv" style={rightDiv}>
          <RightDiv
            problemData={problemData?.data}
            loading={loading}
            tools={tools}
          />
        </div>
      </div>

      <LeftDrawer
        component={
          <LeftDiv
            title={"CS Fundamentals"}
            truncate={truncate}
            navigate={navigate}
          />
        }
      />
    </StyleRoot>
  );
}
const rootDiv = {
  display: "flex",
  flexDirection: "row",
  flex: 1,
};
const leftDiv = {
  display: "flex",
  flex: 0.25,
  backgroundColor: "#212F3C",
  height: "90vh",
  flexDirection: "column",
  textAlign: "left",
  overflowY: "scroll",
  "@media (max-width: 600px)": {
    display: "none",
  },
};
const rightDiv = {
  display: "flex",
  flex: 1,
  backgroundColor: "white",
  height: "90vh",
  overflow: "auto",
  "@media (max-width: 600px)": {},
};

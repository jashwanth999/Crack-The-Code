import { StyleRoot } from "radium";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LeftDiv from "../Components/LeetCodeScreenComponents/LeftDiv";
import "../../App.css";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../Api/Firebase";
import { useDispatch, } from "react-redux";
import LeftDrawer from "../Helpers/LeftDrawer";
import { truncate } from "../Helpers/helpersData";
import { tools } from "../Helpers/EdtiorTools";
import RightDiv from "../Components/RightDiv";

export default function CSsolutions() {
  const { subjectName, subTopicName } = useParams();

  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [problemName, setProblemName] = useState([]);
  const [problemData, setProblemData] = useState(null);
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

  useEffect(() => {
    const ref = query(
      collection(db, "CS-fundamentals", subjectName, "subtopics"),
      orderBy("timestamp", "asc")
    );
    const unsub = onSnapshot(ref, (snapshot) => {
      setProblemName(snapshot.docs.map((doc) => doc.id));
    });
    return unsub;
  }, [subjectName]);
  const url = `cs-fundamentals/${subjectName}`;

  return (
    <StyleRoot>
      <div className="App" style={rootDiv}>
        <div className="leftDiv" style={leftDiv}>
          <LeftDiv
            list={problemName}
            navigate={navigate}
            truncate={truncate}
            title={subjectName.replace(/-/g, " ")}
            url={url}
            text={subTopicName.replace(/-/g, " ")}
          />
        </div>
        <div className="rightDiv" style={rightDiv}>
          <RightDiv
            loading={loading}
            problemData={problemData?.data}
            tools={tools}
          />
        </div>
      </div>
      <LeftDrawer
        component={
          <LeftDiv
            list={problemName}
            navigate={navigate}
            truncate={truncate}
            title={subjectName.replace(/-/g, " ")}
            url={url}
            text={subTopicName.replace(/-/g, " ")}
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
  justifyContent: "center",
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

import { StyleRoot } from "radium";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LeftDiv from "../Components/LeftDiv";
import "../../App.css";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../Api/Firebase";
import LeftDrawer from "../Helpers/LeftDrawer";
import { homeData, truncate } from "../Helpers/helpersData";
import { tools } from "../Helpers/EdtiorTools";
import RightDiv from "../Components/RightDiv";
import LeftDiv2 from "../Components/LeftDiv2";

export default function ArticleSolution() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [problemName, setProblemName] = useState([]);
  const [problemData, setProblemData] = useState(null);
  useEffect(() => {
    setLoading(true);

    const unsub = onSnapshot(doc(db, "articles", articleId), (doc) => {
      setProblemData(doc.data());
      setLoading(false);
    });
    return unsub;
  }, [articleId]);

  const url = `articles/${articleId}`;

  return (
    <StyleRoot>
      <div className="App" style={rootDiv}>
        <div className="leftDiv" style={leftDiv}>
          <LeftDiv2
            navigate={navigate}
            truncate={truncate}
            title={"Quick Links"}
            list={homeData}
          />
        </div>
        <div className="rightDiv" style={rightDiv}>
          <RightDiv
            loading={loading}
            problemData={problemData}
            tools={tools}
            screen="cs"
          />
        </div>
      </div>
      <LeftDrawer
        component={
          <LeftDiv2
            navigate={navigate}
            truncate={truncate}
            title={"Quick Links"}
            list={homeData}
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
  height: "97vh",
  textAlign: "left",
  overflowY: "scroll",
  flexDirection: "column",
  "@media (max-width: 600px)": {
    display: "none",
  },
};
const rightDiv = {
  display: "flex",
  flex: 1,
  backgroundColor: "white",
  height: "97vh",
  overflowY: "scroll",

  "@media (max-width: 600px)": {},
};

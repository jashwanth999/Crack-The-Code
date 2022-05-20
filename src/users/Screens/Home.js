import { StyleRoot } from "radium";
import * as React from "react";
import ArticleCard from "../Components/HomeComponents/ArticleCard";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import LeftDrawer from "../Helpers/LeftDrawer";
//import LeftDiv from "../Components/LeftDiv";
import { useDispatch } from "react-redux";
import { drawerListAction } from "../../Api/actions";
import { truncate, homeData } from "../Helpers/helpersData";
import LeftDiv2 from "../Components/LeftDiv2";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Api/Firebase";
export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [articles, setArticles] = React.useState([]);
  React.useEffect(() => {
    dispatch(drawerListAction([]));
  }, [dispatch]);

  React.useEffect(() => {
    // setLoading(true);

    const unsub = onSnapshot(collection(db, "articles"), (snapshot) => {
      setArticles(snapshot.docs.map((doc) => doc.data()));
      // setLoading(false);
    });
    return unsub;
  }, []);

  return (
    <StyleRoot>
      <div style={rootDiv}>
        <div style={leftDiv}>
          <LeftDiv2
            navigate={navigate}
            truncate={truncate}
            title={"Quick Links"}
            list={homeData}
          />
        </div>
        <div style={rightDiv}>
          <div style={rightCardDiv}>
            {articles.map((article, index) => (
              <ArticleCard
                navigate={navigate}
                url={"/article"}
                title={article.probName}
                description={article.blocks[0].val}
              />
            ))}
          </div>
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
  backgroundColor: "#F8F9F9",
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
  height: "100vh",
  overflowY: "scroll",
  "@media (max-width: 600)": {
    flex: 1,
  },
};

const rightCardDiv = {
  height: "auto",
  width: "100%",
  margin: 6,
  textAlign: "left",
  padding: 10,
};

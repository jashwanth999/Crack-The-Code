import { StyleRoot } from "radium";
import * as React from "react";
import ArticleCard from "../Components/HomeComponents/ArticleCard";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import LeftDrawer from "../Helpers/LeftDrawer";
//import LeftDiv from "../Components/LeftDiv";
import { useDispatch } from "react-redux";
import { drawerListAction } from "../../Api/actions";
import { truncate } from "../Helpers/helpersData";
import LeftDiv2 from "../Components/LeftDiv2";
export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(drawerListAction([]));
  }, [dispatch]);
  React.useEffect(() => {
    console.log("home");
  }, []);

  const data = [
    {
      text: "Computer Science",
      url: "/cs-fundamentals",
    },
    {
      text: "Data structures and Algo",
      url: "/cs-fundamentals",
    },
    {
      text: "Leetcode Solutions",
      url: "/leetcode-solutions/1-Two-Sum",
    },
  ];

  return (
    <StyleRoot>
      <div style={rootDiv}>
        <div style={leftDiv}>
          <LeftDiv2
            navigate={navigate}
            truncate={truncate}
            title={"Quick Links"}
            list={data}
          />
        </div>
        <div style={rightDiv}>
          <div style={rightCardDiv}>
            <ArticleCard
              navigate={navigate}
              url={"/article"}
              title={"For Loop in C++"}
              description={`In C and all other modern programming languages, iteration statements (also called loops) allow a set of instructions to be repeatedly executed until a certain condition is reached.`}
            />
          </div>
        </div>
      </div>
      <LeftDrawer
        component={
          <LeftDiv2
            navigate={navigate}
            truncate={truncate}
            title={"Quick Links"}
            list={data}
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
  backgroundColor: "#f7f9faf2",
  height: "90vh",
  overflowY: "scroll",
  justifyContent: "center",
  "@media (max-width: 600px)": {
    display: "none",
  },
};
const rightDiv = {
  display: "flex",
  flex: 1,
  height: "90vh",
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

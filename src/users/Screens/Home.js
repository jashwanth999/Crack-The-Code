import { StyleRoot } from "radium";
import * as React from "react";
import FieldCard from "../Components/HomeComponents/FieldCard";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import LeftDrawer from "../Helpers/LeftDrawer";
import LeftDiv from "../Components/LeetCodeScreenComponents/LeftDiv";
import { useDispatch } from "react-redux";
import { drawerListAction } from "../../Api/actions";
export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(drawerListAction([]));
  }, [dispatch]);
  return (
    <StyleRoot>
      <div style={rootDiv}>
        <div style={leftDiv}>
          <LeftDiv navigate={navigate} title={"Crack the Company"} list={[]} />
        </div>
        <div style={rightDiv}>
          <div style={rightCardDiv}>
            <FieldCard
              navigate={navigate}
              imageUrl={
                "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-computer-science-computer-science-flaticons-flat-flat-icons.png"
              }
              url={"/cs-fundamentals/OOPS-Concept/Class-and-Objects"}
              title={"Computer Science Fundamentals"}
              description={`  
             Operating Systems , DBMS , Computer Network , OOPs Concept`}
            />
            <FieldCard
              imageUrl={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAADcElEQVRIiZ2VX2xTZRjGn+987fl62q6D2rl1uG6BDiyKziwTZhQyCcaQERJDTfDPTMgUuNDEGxPxRi+8QC5NTABdNC4GR2IgEslMIIvLMiZ/JZK4hsmwHQtdcEvTnZ729JzXi3pKkbbnzPfu+/I+v+d9vnPOdxhWWLu6W70pjaeWdbG6tUGdGrt8Z0u9ftdK4L29jym3l9jdvKn4GQPSWdFtp5FWAl9eYum8qfgBgIgQDhRO2Om4E3g0CsH0VXfzptJg7bX41bNjl+f22GltE0SjEF53ZEEzPQFrb11IPf/LlbmdToZjdnDFFVkokKc8+ZvbON7ZGSTStYlHQ/d2sL5Z7X8ZRKMQijuSLlRM/toLHAf7Hyn3kJFfyOSkaOcbU5lanFpHJCuu9gfg22LGvYMve8fMYn4WoNJ0XDQFvJRIjzzhX0kC+anHI+k8eRqtjY6gOj46mdpqredPdn3AXb7DYP/Kjfx8k6F2sFdvFOwSPARfF8pNVMIBIBy/9plZVN8DzFIULsJp5j5ULcEDBl2xtrlK+IZm9cJPE8nnqwlb4lc/J0M9ADIJZJjE+NlqfeUj6usJD9/JNLxurWPh3KVTY8meaqLKmhnpblyr6UU2cH25rkFsfUfBZLIbADqCuZujk8lOO7iTsu4iuUgut8QAIgOvbEo+PTp5v+nM6dN9BPoBwCoHTIOBfd2/e/dg2UBRlObFxUUAwJogM/Yfg1qpyGQz75uG6QQOABygAQD3DXK5XMorE7Kaidk84/t2BV8a+vHvny0Fk+hTUzc3AiScODDOTz20uSXmXxJCJiFk6t3oKxzeF2p1OHHdKr+mAZ90QBGlZ35lRnefuajd+jjua7EDTB+LfJI43v6RI7ftzwS+8XkFWUm2bvJrh/b6mmv1z3wZGZ8fbqf54Xa6eTSyv24CADh3NfPW5k73CRcvJZlKFMT477j9btzf9F/hn19FprweVv4IDYmWbA0A4Pxv2b2b17tHLJNfE7q4Po3kxSNtTwLA9NHW0K2hthuKYM9amqxqDm14O/l9NYOa1/X2Lv/JCwl9T9EoXTeTR5qpqVEqcE4yK99yQFajbzsH/xqoxan5Rzt3LRt/LiZGQgEJ/T0etKyWmItDWHByAK+bwKo/jq95UeauL2ROUUli3CQydYNSmkEfxgZT39np/wFHSEoKncj6SQAAAABJRU5ErkJggg=="
              }
              navigate={navigate}
              url={"/leetcode-solutions/1-Two-Sum"}
              title={"Leetcode Solutions"}
              description={`All Leetcode Solutions from brute force to optimized codes with brief approach explantion`}
            />
          </div>
        </div>
      </div>
      <LeftDrawer title={"Crack the Company"} />
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

import ReactLoading from "react-loading";
export default function RightDiv(props) {
  if (props.loading)
    return (
      <div
        style={{ ...rootDiv, justifyContent: "center", alignItems: "center" }}
      >
        <ReactLoading
          height={55}
          width={55}
          type={"spinningBubbles"}
          color="rgb(0, 30, 60)"
        />
      </div>
    );
 
  return (
    <div style={rootDiv}>
      {props.problemData &&
        props.problemData.map((x, index) => {
          return (
            <div style={{ textAlign: "left" }} key={index}>
              {props.tools[x.name](x.value)}
            </div>
          );
        })}
    </div>
  );
}

const rootDiv = {
  display: "flex",
  flexDirection: "column",
  width: "98%",
};

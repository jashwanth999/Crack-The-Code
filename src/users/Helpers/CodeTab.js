import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ExampleCode from "./exampleCode";
import CodeView from "./CodeView";
export default function CodeTab(props) {
  const [value, setValue] = React.useState("cpp");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(props.data);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              style={{ color: "#1B93B4", fontWeight: "bold" }}
              label="CPP"
              value="cpp"
            />
            <Tab
              style={{ color: "#1B93B4", fontWeight: "bold" }}
              label="JAVA"
              value="java"
            />
            <Tab
              style={{ color: "#1B93B4", fontWeight: "bold" }}
              label="PYTHON"
              value="python"
            />
          </TabList>
        </Box>
        <TabPanel value="cpp">
          {props.data && (
            <CodeView
              lineNum={true}
              language={value}
              code={props.data[value]}
            />
          )}
        </TabPanel>
        <TabPanel value="java">
          {props.data && (
            <CodeView
              lineNum={true}
              language={value}
              code={props.data[value]}
            />
          )}
        </TabPanel>
        <TabPanel value="python">
          {props.data && (
            <CodeView
              lineNum={true}
              language={value}
              code={props.data[value]}
            />
          )}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
const editorStyle = {
  fontSize: 14,
  borderRadius: 5,
  backgroundColor: "black",
  fontFamily:
    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
};

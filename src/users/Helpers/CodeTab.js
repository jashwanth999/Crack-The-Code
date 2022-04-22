import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Code from "./Code";
//import CodeView from "./CodeView";
export default function CodeTab(props) {
  const [value, setValue] = React.useState("cpp");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ typography: "body1" }}>
      <TabContext value={value}>
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

        <TabPanel value="cpp">
          {props.data && (
            <Code lineNum={true} language={value} code={props.data[value]} />
          )}
        </TabPanel>
        <TabPanel value="java">
          {props.data && (
            <Code lineNum={true} language={value} code={props.data[value]} />
          )}
        </TabPanel>
        <TabPanel value="python">
          {props.data && (
            <Code lineNum={true} language={value} code={props.data[value]} />
          )}
        </TabPanel>
      </TabContext>
    </Box>
  );
}

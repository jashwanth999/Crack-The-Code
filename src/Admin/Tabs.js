import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CodeEditor from "@uiw/react-textarea-code-editor";
export default function Tabs(props) {

  const [value, setValue] = React.useState("cpp");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="CPP" value="cpp" />
            <Tab label="JAVA" value="java" />
            <Tab label="PYTHON" value="python" />
          </TabList>
        </Box>
        <TabPanel value="cpp">
      
            <CodeEditor
              value={props.cppValue}
              language={"cpp"}
              placeholder={`paste cpp code`}
              style={editorStyle}
              onChange={(e) => props.setCppValue(e.target.value)}
            />
      
        </TabPanel>
        <TabPanel value="java">
          <CodeEditor
            value={props.javaValue}
            language={"java"}
            placeholder={`paste java code`}
            style={editorStyle}
            onChange={(e) => props.setJavaValue(e.target.value)}
          />
        </TabPanel>
        <TabPanel value="python">
          <CodeEditor
            value={props.pythonValue}
            language={"python"}
            placeholder={`paste python code`}
            style={editorStyle}
            onChange={(e) => props.setPythonValue(e.target.value)}
          />
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

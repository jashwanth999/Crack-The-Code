import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Button } from "@mui/material";
import { StyleRoot } from "radium";
import CompilerEditor from "./CompilerEditor";
import axios from "axios";
//import Header from "./Header";
//import { defaultCode } from "../users/Helpers/helpersData";

export default function Compiler() {
  const [lang, setLang] = useState("cpp");
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  function onChange(newValue) {
    setValue(newValue);
  }
  console.log(lang);
  let data = {
    code: value,
    language: lang === "python" ? "py" : lang,
    input: input,
  };
  let config = {
    method: "post",
    url:
      proxyurl + "https://codexweb.netlify.app/.netlify/functions/enforceCode",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: data,
  };

  const run = async () => {
    setOutput("loading");
    await axios(config).then((res) => {
      setOutput(res.data.output);
    });
  };

  return (
    <StyleRoot>
      <br />

      <div style={{}}>
        <div style={{ margin: 10, display: "flex", height: 40 }}>
          <select
            name="lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={{
              height: 40,
              padding: 10,
              backgroundColor: "#212F3C",
              color: "white",
              borderRadius: 3,
            }}
          >
            <option value="cpp">C++</option>
            <option value="java">java</option>
            <option value="python">python</option>
          </select>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 10, padding: 10 }}
            onClick={run}
          >
            Run
          </Button>
        </div>
        <div style={rootDiv}>
          <div style={leftDiv}>
            <CompilerEditor value={value} lang={lang} onChange={onChange} />
          </div>
          <div style={rightDiv}>
            <CodeEditor
              value={input}
              language={"text"}
              placeholder="Enter Input"
              padding={15}
              onChange={(e) => setInput(e.target.value)}
              style={editorStyle}
            />
            <CodeEditor
              value={output}
              language={"text"}
              placeholder="Ouptut"
              padding={15}
              style={editorStyle}
            />
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}
const editorStyle = {
  fontSize: "0.9rem",
  borderRadius: 5,
  backgroundColor: "#212F3C",
  color: "#D5DBDB",
  overflow: "auto",
  lineHeight: 1.5,
  height: 184,
  marginTop: 5,
  width: "100%",
  fontFamily:
    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
};
const rootDiv = {
  width: "100%",
  display: "flex",
  flex: 1,
  flexWrap: "wrap",
  flexDirection: "row",
};

const leftDiv = {
  flex: 0.7,
  display: "flex",
  "@media (max-width: 600px)": {
    flex: 1,
  },
};

const rightDiv = {
  flex: 0.3,
  display: "flex",
  margin: 10,
  flexDirection: "column",
  "@media (max-width: 600px)": {
    flex: 1,
  },
};

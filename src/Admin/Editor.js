import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import React, { useEffect, useState } from "react";
import { draftToHtml } from "./draft-to-html";
import parser from "html-react-parser";
import Code from "../users/Helpers/Code";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { db } from "../Api/Firebase";
import { tools } from "../users/Helpers/EdtiorTools";
import Tabs from "./Tabs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [code, setCode] = useState(false);

  const add = () => {
    handleClose();
    setCode(true);
  };
  return (
    <div>
      {code && <button onClick={handleOpen}> Added Code</button>}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Tabs />

          <Button onClick={add}> Add </Button>
        </Box>
      </Modal>
    </div>
  );
}

function myBlockRenderer(contentBlock) {
  const type = contentBlock.getType();
  const key = contentBlock.getKey();
  //console.log(key);
  if (type === "code") {
    return {
      component: BasicModal,
      editable: true,
      props: {
        key: key,
      },
    };
  }
}

function MediaComponent() {
  // const { block, contentState } = this.props;

  //console.log(block.getEntityAt(0));
  //const data = contentState.getEntity(block.getEntityAt(0)).getData();
  return;
}

function TextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [probName, setProbName] = useState("");
  // const [blocks, setBlocks] = useState({});
  const onEditorStateChange = (value) => {
    setEditorState(value);
  };
  const blocks = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const addProblem = () => {
    try {
      setDoc(doc(db, "articles", probName.replace(/ /g, "-")), {
        timestamp: new Date(),
        blocks: blocks,
        probName: probName,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  //console.log(convertToRaw(editorState.getCurrentContent()).blocks);

  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
      <div style={rightDiv}>
        <button onClick={addProblem}> POST </button>
        <br />
        <input
          value={probName}
          onChange={(e) => setProbName(e.target.value)}
          placeholder="Problem Name"
          type="text"
          style={{ width: "70%", height: 30, color: "black" }}
        />
        <br />

        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
          blockRendererFn={myBlockRenderer}
        />
        <div style={{ margin: 10 }}>
          {blocks.map((block, index) => {
            if (block.code) {
              return <Code code={block.val} language={"cpp"} />;
            } else if (block.output) {
              return <Code code={block.val} language={"text"} />;
            } else {
              return (
                <p
                  style={{
                    textAlign: "left",
                    fontFamily:
                      "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono",
                  }}
                >
                  {" "}
                  {parser(block.val)}{" "}
                </p>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
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
  flexDirection: "column",
  margin: 10,
  "@media (max-width: 600px)": {},
};

export default TextEditor;

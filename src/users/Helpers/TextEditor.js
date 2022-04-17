import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <>
        <br />

        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <div style={{ width: "100%", overflow: "scroll",height:'100vh' }}>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>

          <div
            style={{ textAlign: "left",whiteSpace:'normal' }}
            dangerouslySetInnerHTML={{
              __html: draftToHtml(
                convertToRaw(editorState.getCurrentContent())
              ),
            }}
          ></div>

          <br />
        </div>
      </>
    );
  }
}

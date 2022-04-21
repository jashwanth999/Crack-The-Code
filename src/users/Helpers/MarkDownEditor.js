import MarkdownEditor from "@uiw/react-markdown-editor";
import React, { useState } from "react";
//import MarkdownPreview from "@uiw/react-markdown-preview";
//<MarkdownPreview source={markdown} />
export default function Markdown() {
  const [markdown, setMarkdown] = useState("");
  return (
    <div style={{ textAlign: "left" }}>
      <MarkdownEditor
        height={500}
        visible
        value="123"
     
        onChange={(editor, data, value) => setMarkdown(value)}
      
      />
      <br />
    </div>
  );
}

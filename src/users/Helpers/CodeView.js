import { CopyBlock, dracula } from "react-code-blocks";
export default function CodeView(props) {
  return (
    <CopyBlock
      text={props.code}
      language={props.language}
      showLineNumbers={props.lineNum}
      theme={dracula}
      codeBlock
    />
  );
}

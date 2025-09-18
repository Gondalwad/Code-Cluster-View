import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import { formatJava } from "../jsUtils/CodeFormatters";

export default function ProblemEditor({codeSnippet}) {

    const [codeValue, setCodeValue] = useState("// reload");
    const editorRef = useRef(null);
    const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  console.log(codeSnippet);
    
formatJava(codeSnippet).then((formattedCode) => {
  console.log("Formatted:", formattedCode);
  setCodeValue(formattedCode);
});
    console.log(codeValue);
  return (
    <Editor
      height="70vh"
      language="java"
      value={codeSnippet!=null ? `${codeValue}` : "// re"}
      theme="vs-dark"
      options={{
        mode :"java",
        minimap: { enabled: false },
        wordWrap: "on",
      }}
      onMount={handleEditorDidMount}
    />
  );
}

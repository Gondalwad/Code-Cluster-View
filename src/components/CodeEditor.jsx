import Editor from "@monaco-editor/react";
import { useState, useEffect } from "react";
import { formatJava } from "../jsUtils/CodeFormatters";

export default function ProblemEditor({codeSnippet, setCode}) {

    const [codeValue, setCodeValue] = useState(null);
  
// formats code
  useEffect(() => {
    let isMounted = true; // ✅ prevent updates after unmount

    const formatCode = async () => {
      if (!codeSnippet) {
        if (isMounted) setCodeValue(null);
        return;
      }
      try {
        const formattedCode = await formatJava(codeSnippet);
        if (isMounted) {
          setCodeValue(formattedCode && formattedCode.trim() !== "" ? formattedCode : null);
        }
      } catch (err) {
        console.error("Code formatting failed", err);
        if (isMounted) setCodeValue(null);
      }
    };

    formatCode();

    return () => {
      isMounted = false; // ✅ cleanup
    };
  }, [codeSnippet]);
    
  return (
    <Editor
      onChange={(newCode)=> setCode(newCode)}
      height="70vh"
      language="java"
      value={codeSnippet!=null ? `${codeValue}` : "// re"}
      theme="vs-dark"
      options={{
        mode :"java",
        minimap: { enabled: false },
        wordWrap: "on",
      }}
    />
  );
}

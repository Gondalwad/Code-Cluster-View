import Editor from "@monaco-editor/react";
import Button from "../components/utils/button";

export default function CodeEditor() {
  
  return (
    <div className="container-fluid p-3 bg-dark" style={{ minHeight: "100vh" }}>
      
      <div className="row align-items-center mb-3 text-white">
        <div className="col-md-6">
          <h4 className="fw-bold">
          </h4>
        </div>
        <div className="col-md-6 text-end">
          <Button value={"Run"}  />
          <Button value={"Submit"}  />
        </div>
      </div>

      
      <div className="row mb-3">
      {/* problem description */}
        <div className="col-12 col-md-6 border border-secondary rounded p-3 bg-dark text-white overflow-auto mb-3 mb-md-0" style={{ maxHeight: "70vh" }}>
          <h5>Description</h5>
          <p>{problemDescription}</p>
          
        </div>

      {/* code editor */}
        <div className="col-12 col-md-6 border border-secondary rounded bg-dark">
          <Editor
            height="70vh"     
            defaultLanguage="javascript"
            defaultValue="console.log('Hello World') // nothing to see here"
            theme="vs-dark"
            options={{
              contextmenu: false,
              minimap: { enabled: false }, // cleaner look
            }}
          />
        </div>
      </div>

      {/* Bottom row: Test Cases / Output   */}
      <div className="row bg-dark">
        <div className="col-12 border border-secondary rounded p-3 bg-dark shadow text-white" style={{ height: "20vh" }}>
          <h5 className="fw-bold">Test Cases / Output</h5>
          <pre className=" p-2 rounded">Your program output will appear here...</pre> 
        </div>
      </div>
    </div>
  );
}

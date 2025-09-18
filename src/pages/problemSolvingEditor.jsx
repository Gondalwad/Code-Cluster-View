import Editor from "@monaco-editor/react";
import Button from "../components/utils/button";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getProblem from "../jsUtils/getProblem";
import ProblemEditor from "../components/CodeEditor";
export default function CodeEditor() {
    // get url
  const name = useParams().name;
  const [problemName, setProblemName] = useState(name);
  const [currentProblem , setCurrentProblem] = useState();
  
  
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await getProblem(name);
        const data = await response.json(); // Don't forget to parse JSON!
        setCurrentProblem(data);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
    };

    fetchProblems();
  }, [problemName]);
  

  
  return (
    <div className="container-fluid p-3 " style={{ minHeight: "100vh" }}>
      
      <div className="row align-items-center mb-3 text-white">
        <div className="col-md-6">
          <h4 className="fw-bold"> 
            {currentProblem != null ? `${currentProblem.problemNo}. ${currentProblem.problemName}` : "Reload page"} 
          </h4>
        </div>
        <div className="col-md-6 text-end">
          <Button value={"Run"}  />
          <Button value={"Submit"}  />
        </div>
      </div>

      
      <div className="row mb-3">
      {/* problem description */}
        <div className="col-12 col-md-6 border border-secondary rounded p-3 text-white overflow-auto mb-3 mb-md-0" style={{ maxHeight: "70vh" }}>
          <h5>Description</h5>
          <p className="">
            {currentProblem != null
              ? `${currentProblem.problemDescription}`
              : "Reload page"}</p>
          {/* <p>{problemDescription}</p> */}
          
        </div>

      {/* code editor */}
        <div className="col-12 col-md-6 border border-secondary rounded bg-dark">
          <ProblemEditor codeSnippet={currentProblem!=null ? `${currentProblem.problemCodeSnippet}` : "// reload page"}></ProblemEditor>
          {}
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

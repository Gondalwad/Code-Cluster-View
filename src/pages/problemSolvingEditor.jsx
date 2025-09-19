
import Button from "../components/utils/button";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getProblem from "../jsUtils/getProblem";
import ProblemEditor from "../components/CodeEditor";
import handleCodeSubmit from "../jsUtils/handleCodeSubmit";
import getSubmissionResult from "../jsUtils/getSubmissionResult";


export default function CodeEditor() {
    // get url
  const name = useParams().name;
  const [problemName, setProblemName] = useState(name); // problem name
  const [currentProblem , setCurrentProblem] = useState(); // for current problem going on
  const [code, setCode] = useState(""); // code Solution
  const [submissionError, setSubmissionError] = useState(null); // for submission Error

  const [testCasesStatus, setTestCasesStatus] = useState(null);
  const [passedTestCaseCount, setPassedTestCaseCount] = useState(0); // no of passed of testCases
  const [testCaseCount, setTestCaseCount] = useState(0); // no of total testCases
  const [testCase1 , setTestCases1Result] = useState(null);
  const [testCase2 , setTestCases2Result] = useState(null);
  const [testCase3 , setTestCases3Result] = useState(null);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await getProblem(name);
        const data = await response.json(); // Don't forget to parse JSON!
        setCurrentProblem(data);
        setProblemName(data.problemName);
        // console.log(data)
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
    };

    fetchProblems();
  }, [problemName]);

// handles submit
function handleSubmission() {
  handleCodeSubmit(code, problemName)
    .then((res) => res)
    .then((data) => {
      if (data.status === 400) {

        throw new Error("Check if You wrote the code !"); 
      }
      if ( data.status === 201){
        data.json().then((values)=>{
          handleSubmissionResult(values.jobId);
        });
      }
      // console.log("Response:", data); 
    })
    .catch((err) => {
      setSubmissionError(err.message); 
      console.error("My Error:", err); 
    });
}

// handles submission Result
function handleSubmissionResult(jobId){

  setTimeout(async () => {
    let flag;
    try {
      const result = await getSubmissionResult(jobId);
      console.log("Result:", result);
      if(result.status=== 200){
        result.json().then((result)=>{
          if(result.status == "Error"){
            setSubmissionError(result.errorMessage);
            return;
          }
          setSubmissionError(null);
          setPassedTestCaseCount(result.numberOfTestCasesPassed);
          setTestCaseCount(result.numberOfTestCases);
          setTestCasesStatus(result.status);
          setTestCases1Result(result.testCase1);
          setTestCases2Result(result.testCase2);
          setTestCases3Result(result.testCase3);
        })
      }
      else if(flag <= 3){
        flag += 1;
        handleSubmission(jobId);
      }
      else{
        setSubmissionError("Somthing went wrong please try again !");
      }

    } catch (err) {
      console.error("Error fetching submission result:", err);
    }
}, 3000)
}

  
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
          <Button value={"Submit"} onClick={handleSubmission} />
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
          <ProblemEditor setCode = {setCode} codeSnippet={currentProblem!=null ? `${currentProblem.problemCodeSnippet}` : "// reload page"}></ProblemEditor>
          {}
        </div>
      </div>

      {/* Bottom row: Test Cases / Output   */}
      <div className="row bg-dark">
        <div className="col-12 border border-secondary rounded p-3 bg-dark shadow text-white" style={{ height: "auto" }}>
         
          <p className={submissionError == null ? 'd-none' : 'd-block text-danger bg-alert'}> {submissionError != null ? submissionError : ''} </p>
          <h6 className={testCasesStatus != "Passed" ? `text-danger shadow-sm` : `text-success shadow-sm`}><strong>{testCasesStatus}</strong></h6>
          <h5 className="fw-bold">Test Cases Output {testCaseCount != 0 ?`|| ${passedTestCaseCount} Passed / outoff ${testCaseCount}` : ""}</h5>
          <pre className=" p-2 rounded">Your program output...</pre> 
          

          <div className={`${testCasesStatus !== "Passed" ? "text-danger shadow-sm" : "text-success shadow-sm"} d-flex flex-column flex-md-row justify-context-around`}>
            <>
              {
                testCase1 != null ?
                <div className="col-12 col-md-3 border shadow-lg border-secondary rounded bg-dark p-3 my-2">
                  <p><strong>Test Input:</strong> {testCase1["Test Input"]}</p>
                  <p><strong>Expected Output:</strong> {testCase1["Expected Output"]}</p>
                  <p><strong>Your Output:</strong> {testCase1["Your Output"]}</p>
                </div>
                
              : <div></div>
              }

              {
                testCase1 != null ?
                <div className="col-12 col-md-3 border shadow-sm border-secondary rounded bg-dark p-3 my-2">
                  <p><strong>Test Input:</strong> {testCase2["Test Input"]}</p>
                  <p><strong>Expected Output:</strong> {testCase2["Expected Output"]}</p>
                  <p><strong>Your Output:</strong> {testCase2["Your Output"]}</p>
                </div>
                : <div></div>
              }

              {
                testCase3 != null ?
                <div className="col-12 col-md-3 border shadow-sm border-secondary rounded bg-dark p-3 my-2">
                  <p><strong>Test Input:</strong> {testCase3["Test Input"]}</p>
                  <p><strong>Expected Output:</strong> {testCase3["Expected Output"]}</p>
                  <p><strong>Your Output:</strong> {testCase3["Your Output"]}</p>
                </div>
                : <div></div>
              } 
            
            </>
            
          </div>
        </div>
      </div>
    </div>
  );
}

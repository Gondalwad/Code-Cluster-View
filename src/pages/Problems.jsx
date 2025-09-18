import { useState, useEffect } from "react";
import ProblemCard from "../components/problemCard";
import getProblems from "../jsUtils/getProblems";

export default function Problems() {
  localStorage.setItem("token","eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJGaXJzdFVzZXIiLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3NTgwOTMyOTQsImV4cCI6Nzk1MTEyNjM2NDQ1NTM0NX0.6pfqBV7VLQSq-DWCklWkUDxOqUstweME9MFybd2ZMadsNLUvZP_FiEKTHkt1JNShodhq0SZDSWhO0DOEmnTnNQ");


  const [problemCount, setProblemCount] = useState(0);
  const [listOfProblems, setListOfProblems] = useState([]);
  useEffect(() => {
    const fetchProblems = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await getProblems(token, problemCount);
        const data = await response.json(); // Don't forget to parse JSON!
        setListOfProblems(data);
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
    };

    fetchProblems();
  }, [problemCount]);

  return (
    <div className="vw-100 vh-100">
      <section className="p-3"></section>
      <section className="row gy-3 d-flex justify-content-around m-3">
        {
          listOfProblems.map((problem, index)=>(
            <ProblemCard extraStyle={"col-3 shadow bg-purple-100"} problemDesc={problem.problemDescription} problemName={problem.problemName} problemNo={problem.problemNo}></ProblemCard>
          ))
        }
      </section>=
    </div>
  );
}

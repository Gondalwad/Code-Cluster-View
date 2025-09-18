import { Link } from "react-router-dom";
import Button from "./utils/button";

export default function ProblemCard({problemDesc,problemName,problemNo,extraStyle=""}) {

  return (
    <div className={"card "+extraStyle}>
      <div className="card-body">
        <h6 className="card-title text-muted">Problem No: {problemNo}.</h6>
        <h5 className="card-subtitle mb-2 ">{problemName}</h5>
        <p className="card-text text-truncate text-muted">
          {problemDesc}
        </p>
        {/* <Link to="#" className="card-link">
          Card link
        </Link> */}
        
        <Button redirect={"solve/"+problemName} value={"Solve"}></Button>
      </div>
    </div>
  );
}

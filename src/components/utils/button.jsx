import { Link } from "react-router-dom";

export default function Button({value, redirect, extraStyle, onClick ,className="btn btn-light ms-1 m-1 text-center "}){


    return(
        <Link to={redirect}>
            <button className={className+extraStyle} onClick = {onClick}><span className="text-custom-purple fw-medium text-center">{value}</span></button>
        </Link>
    );
}
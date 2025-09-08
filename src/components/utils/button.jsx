import { Link } from "react-router-dom";

export default function Button({value, redirect, extraStyle ,className="btn bg-light ms-1 m-1 text-center"}){


    return(
        <Link to={redirect}>
            <button className={className+extraStyle} ><span className="text-custom-purple fw-medium">{value}</span></button>
        </Link>
    );
}
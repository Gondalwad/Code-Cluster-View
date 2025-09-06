import { Link } from "react-router-dom";

export default function Button({value, redirect, className="btn btn-light ms-3 text-center"}){


    return(
        <Link to={redirect}>
            <button className={className}>{value}</button>
        </Link>
    );
}
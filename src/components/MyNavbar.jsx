import { NavLink,Link } from "react-router-dom";
import Logo from "./utils/Logo"
import SignInOrProfile from "./utils/SignInOrProfile";

export default function MyNavbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom-purple sticky-top py-0">
      <div className="container-fluid">
        {/* Logo / Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          <Logo className="p-0" style={{ width: "50px" }} />

        </Link>

        {/* Toggle button (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav ms-0 me-3">
            <li className="nav-item ">
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/problems">Problems</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contact</NavLink>
            </li>
          </ul>
          {/* set button or profileImg */}
          <SignInOrProfile/>
        </div>
      </div>
    </nav>
  );
}

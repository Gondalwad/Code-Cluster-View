import { Link } from "react-router-dom";
import Logo from "./utils/Logo"
export default function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-purple-600 sticky-top py-0">
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
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item ">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/problems">Problems</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <button className="btn btn-light ms-3 text-center">Sign In</button>
        </div>
      </div>
    </nav>
  );
}

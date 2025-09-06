import { Link } from "react-router-dom";
import Logo from "./utils/Logo"
import SignInOrProfile from "./utils/SignInOrProfile";

export default function MyNavbar() {
  localStorage.setItem("token","eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJGaXJzdFVzZXIiLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3NTcxODgxMjksImV4cCI6NzkxODU0MDQ1MDk1MTM0NX0.7Da1AZM8pLB6sCJE1Z5mPCSQDmEYjXQjjfTKSTrUaWUQ4KE1Lx5iPcDhFmog_L7vLXZcna-qU8atTGTPmpSrOw")
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
          {/* set button or profileImg */}
          <SignInOrProfile/>
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../components/utils/Logo";

export default function SignIn() {
  const [preferredId, setpreferredId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // ✅ state for error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // reset previous error

    const strongPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!strongPass.test(password)) {
      setErrorMessage("Password must be at least 8 characters with 1 number & 1 special character.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preferredId, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Show backend message if available
        setErrorMessage(data.message || "Invalid credentials, please try again.");
        return;
      }

      //  Save token in local storage
      if (data.jwt) {
        localStorage.setItem("token", data.jwt);
      }

      window.location.href="/";
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow p-4 col-12 col-md-6 col-lg-4 bg-dark border text-white">
        <div className="text-center mb-3">
          <Logo style={{ width: "80px", height: "auto" }} />
        </div>
        <h3 className="text-center mb-3">Sign In</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Preferred ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter preferredId"
              value={preferredId}
              onChange={(e) => setpreferredId(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Inline Error Message */}
          {errorMessage && (
            <div className="alert alert-danger py-2" role="alert">
              {errorMessage}
            </div>
          )}

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>

        <p className="text-center mt-3">
          Don’t have an account? <Link to="/signUp">Create one</Link>
        </p>
      </div>
    </div>
  );
}

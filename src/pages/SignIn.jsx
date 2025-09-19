import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../components/utils/Logo";

export default function SignIn() {
  const [preferredId, setpreferredId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const strongPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!strongPass.test(password)) {
      alert("Password must be at least 8 characters with 1 number & 1 special character.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preferredId, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      console.log(data.token);
      // ✅ Save token in local storage

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      navigate("/"); // redirect after login
    } catch (err) {
      console.error(err);
      alert("Sign In failed. Please try again.");
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
            <label className="form-label">preferredId</label>
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

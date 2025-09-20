import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../components/utils/Logo";
import Button from "../components/utils/button";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    profileImg: null,
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImg") {
      setFormData((prev) => ({ ...prev, profileImg: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Password strength check
  const strongPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  if (!strongPass.test(formData.password)) {
    alert("Password must be at least 8 characters with 1 number & 1 special character.");
    return;
  }

  try {
    const fileBytes = formData.profileImg 
  ? Array.from(new Uint8Array(await formData.profileImg.arrayBuffer())) 
  : null;
    const dataToSend = {
      userName: formData.username,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      profileImg: fileBytes
    };

  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}auth/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });

  if (response.status === 201) {
    setSuccess("Account created!");
    setError(null);
    navigate("/signIn");
  } else {
    // Handle error body safely
    const contentType = response.headers.get("content-type");
    let errorMessage = "Something went wrong";

    if (contentType && contentType.includes("application/json")) {
      const errData = await response.json();
      errorMessage = errData.message || JSON.stringify(errData);
    } else {
      errorMessage = await response.text(); // fallback to text
    }

    setError(errorMessage);
    setSuccess(null);
  }
} catch (err) {
  console.error("Network/server error:", err);
  setError(err.message || "Server error. Please try again later.");
  setSuccess(null);
}

};


  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 my-0">
      <div className="card shadow p-4 col-11 col-sm-8 col-md-5 col-lg-4 bg-dark border text-white">
        <div className="text-center">
          <Logo style={{ width: "60px", height: "auto" }} />
        </div>
        <h4 className="text-center mb-3">Create Account</h4>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-2">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control form-control-sm"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-sm"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Username */}
          <div className="mb-2">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control form-control-sm"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control form-control-sm"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Profile Image */}
          <div className="mb-3">
            <label className="form-label">Profile Image</label>
            <input
              type="file"
              name="profileImg"
              className="form-control form-control-sm"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <div className="d-grid">
            <Button type="submit" value="Sign Up" extraStyle="btn btn-primary btn-sm" onClick={handleSubmit} />
          </div>
        </form>

        {/* Link to Sign In */}
        <p className="text-center mt-3 mb-0 small">
          Already have an account? <Link to="/signIn">Sign in</Link>
        </p>

        {error && <p className="alert alert-danger mt-2 fs-6 p-1">{error}</p>}
        {success && <p className="alert alert-success mt-2 fs-6 p-1">{success}</p>}
      </div>
    </div>
  );
}

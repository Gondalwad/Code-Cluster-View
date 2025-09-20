import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 shadow-lg border-top" style={{ boxShadow: "0 -4px 6px -1px rgba(147, 51, 234, 0.7)" }}>
      <div className="container py-4">
        <div className="row text-center text-md-start">
          {/* Navigation Links */}
          <div className="col-12 col-md-4 mb-3">
            <h6 className="fw-bold mb-2">Navigation</h6>
            <ul className="list-unstyled">
              <li><Link to="/signIn" className="text-decoration-none text-light">Sign In</Link></li>
              <li><Link to="/signUp" className="text-decoration-none text-light">Sign Up</Link></li>
              <li><Link to="/problems" className="text-decoration-none text-light">Problems</Link></li>
              <li><Link to="/about" className="text-decoration-none text-light">About</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-light">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-12 col-md-4 mb-3">
            <h6 className="fw-bold mb-2">Follow Me</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://instagram.com/sudarshan_gondalwad" target="_blank" rel="noreferrer" className="text-light fs-5"><FaInstagram /></a>
              <a href="https://github.com/gondalwad" target="_blank" rel="noreferrer" className="text-light fs-5"><FaGithub /></a>
              <a href="https://linkedin.com/in/gondalwad" target="_blank" rel="noreferrer" className="text-light fs-5"><FaLinkedin /></a>
              <a href="https://twitter.com/gondalwad" target="_blank" rel="noreferrer" className="text-light fs-5"><FaTwitter /></a>
            </div>
          </div>

          {/* Extra Links */}
          <div className="col-12 col-md-4 mb-3">
            <h6 className="fw-bold mb-2">More</h6>
            <ul className="list-unstyled">
              <li><Link to="/terms" className="text-decoration-none text-light">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-decoration-none text-light">Privacy Policy</Link></li>
              <li><Link to="/faq" className="text-decoration-none text-light">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="text-center small">
          © {new Date().getFullYear()} CodeCluster. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

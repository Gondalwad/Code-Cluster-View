import { useEffect, useState } from "react";
import developerProfileImage from "../assets/img/developerProfileImage.jpg"; 
import resume from "../assets/resume.pdf"; // place your resume file here
import { FaPhone, FaEnvelope, FaDownload, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaRegCopy } from "react-icons/fa";

export default function Contact() {
    const [alert, setAlert] = useState(null);

    const [alertContent, setAlertContent] = useState(null);

   function copyEmail() {
    const email = "sudarshangondalwad@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setAlert(true);
        setAlertContent("Email Copied!");
        setTimeout(() => setAlert(null), 2000); // Auto-hide alert after 2s
      })
      .catch((err) => {
        setAlert(false);
        setAlertContent("Failed to copy email.");
        setTimeout(() => setAlert(null), 2000); // Auto-hide alert after 2s
      });
  }

  function copyPhoneNo(){
    const phoneNo = "+919423293088";
    navigator.clipboard
      .writeText(phoneNo)
      .then(() => {
        setAlert(true);
        setAlertContent("Phone Number Copied!");
        setTimeout(() => setAlert(null), 2000); // Auto-hide alert after 2s
      })
      .catch((err) => {
        setAlert(false);
        setAlertContent("Failed to Phone Number.");
        setTimeout(() => setAlert(null), 2000); // Auto-hide alert after 2s
      });
  }


  return (
    <div className="contact-page bg-dark text-light py-5 vh-100">
      <div className="container">
        <h1 className="text-center fw-bold mb-4">Contact Me</h1>

        <div className="row align-items-center g-4">
          {/* Profile Section */}
          <div className="col-12 col-md-4 text-center">
            <img
              src={developerProfileImage}
              alt="Developer Profile"
              className="developerProfileImage shadow"
              style={{ maxWidth: "220px"}}
            />
            <h3 className="mt-3">Sudarshan Gondalwad</h3>
            <p className="text-secondary">Full-Stack Java Developer</p>
          </div>

          {/* Info Section */}
          <div className="col-12 col-md-8">
            <h4 className="fw-bold">Skills</h4>
            <p className="text-secondary">
              Java, Spring Boot, Spring Core, Kafka, gRPC, Docker, React, 
              JavaScript, SQL, Problem Solving
            </p>

            <h4 className="fw-bold mt-4">Contact Info</h4>
            <p><FaPhone className="me-2" /> +91 9423293088 <FaRegCopy title="copy phone number" onClick = {copyPhoneNo}className="ms-2 cursor-pointer"/></p>
            <p><FaEnvelope className="me-2" /> <a href="to:sudarshangondalwad@gmail.com">sudarshangondalwad@gmail.com</a> <FaRegCopy title="copy email" onClick = {copyEmail}className="ms-2 cursor-pointer"/></p> 
            {alert !== null && (
                <p className={`alert ${alert ? "alert-success" : "alert-danger"} d-block`}>
                {alertContent}
                </p>
            )}
            {/* Resume Button */}
            <a
              href={resume}
              download="Sudarshan_Gondalwad_Resume.pdf"
              className="btn btn-primary mt-3"
            >
              <FaDownload className="me-2" /> Download Resume
            </a>

            {/* Social Links */}
            <div className="mt-4">
              <a
                href="https://github.com/gondalwad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light me-2"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/gondalwad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light me-2"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/S_Gondalwad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light me-2"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/sudarshan_gondalwad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

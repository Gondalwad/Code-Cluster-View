import Logo from "../components/utils/Logo";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page bg-dark text-light">
      {/* Hero Section */}
      <div className="container text-center py-5">
        <Logo style={{ width: "100px", height: "auto" }} />
        <h1 className="display-4 fw-bold mt-3">About CodeCluster</h1>
        <p className="lead text-secondary">
          A modern distributed code execution system that empowers coders, learners, 
          and competitive programmers to practice and test their solutions in real time.
        </p>
      </div>

      {/* Mission */}
      <div className="container py-5">
        <h2 className="fw-bold text-center mb-4">Our Mission</h2>
        <p className="text-center text-secondary">
          CodeCluster was created to make coding practice faster, scalable, and 
          accessible to everyone. By combining cutting-edge technologies like 
          <strong> Spring Boot, Kafka, gRPC, and Docker</strong>, we ensure 
          seamless code execution and evaluation for users worldwide.
        </p>
      </div>

      {/* Architecture Overview */}
      <div className="container py-5">
        <h2 className="fw-bold text-center mb-4">System Architecture</h2>
        <div className="row g-4 text-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card bg-secondary text-light shadow h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Submission Service</h5>
                <p className="card-text">
                  Handles user submissions, routes them to executors, and 
                  ensures secure processing of code.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card bg-secondary text-light shadow h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Executor Service</h5>
                <p className="card-text">
                  Runs code inside Docker containers for isolation, performance, 
                  and multi-language support.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card bg-secondary text-light shadow h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Result & Discovery</h5>
                <p className="card-text">
                  Result service ensures fast feedback while Discovery & Config 
                  services manage scalability and fault tolerance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="container py-5">
        <h2 className="fw-bold text-center mb-4">Our Vision</h2>
        <p className="text-center text-secondary">
          We aim to become the go-to platform for coding practice and 
          competitive programming. By fostering collaboration and 
          offering an open, extensible system, CodeCluster strives to 
          create a global community of problem solvers.
        </p>
      </div>

      {/* Call to Action */}
      <div className="container text-center py-5">
        <h2 className="fw-bold mb-3">Join the Cluster</h2>
        <p className="text-secondary">
          Be part of the future of online coding platforms.
        </p>
        <Link to="/signUp" className="btn btn-primary btn-lg">
          Get Started
        </Link>
      </div>
    </div>
  );
}

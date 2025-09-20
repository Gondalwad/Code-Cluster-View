import { Link } from "react-router-dom";
import Logo from "../components/utils/Logo";
import Button from "../components/utils/button";

export default function Home() {
  return (
    <div className="home bg-dark text-light">
      {/* Hero Section */}
      <div className="container text-center py-5">
        <Logo style={{ width: "100px", height: "auto" }} />
        <h1 className="display-4 fw-bold mt-3">Welcome to CodeCluster</h1>
        <p className="lead text-secondary">
          A distributed code execution system designed as mimic competitive programming platform, 
          learning, and real-time problem solving. 
        </p>
        <div className="mt-4">
          <Button to="/signUp" extraStyle="btn-lg me-3" value={"Get Started"}></Button>
          <Link to="/problems" className="btn btn-outline-light btn-lg bg-purple-300 text-light">Explore Problems</Link>
        </div>
      </div>

      {/* About Section */}
      <div className="container py-5">
        <h2 className="fw-bold text-center mb-4">About CodeCluster</h2>
        <p className="text-center text-secondary">
          CodeCluster is a scalable platform that lets you write, run, and evaluate code online. 
          Inspired by online judges, it is built with a distributed architecture using 
          <strong> Java, Spring Boot, Kafka, gRPC, and Docker</strong>.
        </p>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <h2 className="fw-bold text-center mb-4">Key Features</h2>
        <div className="row g-4 text-center">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card bg-secondary text-light shadow h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Distributed Execution</h5>
                <p className="card-text">
                  Executes code across multiple services with Docker containers for isolation and scalability.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card bg-secondary text-light shadow h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Multi-Language Support</h5>
                <p className="card-text">
                  Supports Java, and will extend to more languages in the future via dedicated language services.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card bg-secondary text-light shadow h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Problem Solving</h5>
                <p className="card-text">
                  Solve coding challenges, submit solutions, and receive instant feedback on correctness and efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card bg-secondary text-light shadow h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Microservice Architecture</h5>
                <p className="card-text">
                  Modular services like Submission, Executor, Result, Gateway, Config, and Discovery ensure flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container text-center py-5">
        <h2 className="fw-bold mb-3">Ready to Start Coding?</h2>
        <p className="text-secondary">Join CodeCluster and enhance your problem-solving skills today.</p>
          <Button redirect="/signUp" extraStyle="btn-lg me-3" value={"Create Account"}></Button>
      </div>
    </div>
  );
}

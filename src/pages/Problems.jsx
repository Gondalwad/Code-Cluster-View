import ProblemCard from "../components/problemCard";

export default function Problems() {
  return (
    <div className="vw-100 vh-100">
      <section className="p-3"></section>
      <section className="row gy-3 d-flex justify-content-around m-3">
        {Array(50)
          .fill()
          .map((_, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <ProblemCard />
            </div>
          ))}
      </section>
    </div>
  );
}

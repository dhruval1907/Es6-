function Work() {
  return (
    <section className="work-section d-flex flex-column align-items-center justify-content-center">
      <h2 className="fw-bold mb-5">Our Work</h2>

      <div className="container work-container">
        <div className="row h-100">

          {[1,2,3].map((item) => (
            <div className="col-md-4" key={item}>
              <div className="card work-card shadow h-100">
                <img
                  src={`https://picsum.photos/400/30${item}`}
                  className="card-img-top"
                  alt="project"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="fw-bold">Project {item}</h5>
                  <p className="text-muted">
                    Modern responsive website built with latest technologies.
                  </p>
                  <button className="btn btn-outline-primary">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Work;

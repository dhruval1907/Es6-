function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow custom-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary fs-4">MyWebsite</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto fw-semibold">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

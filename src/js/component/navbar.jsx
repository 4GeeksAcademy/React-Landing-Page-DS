import React from "react";

//create your first component
const Navbar = () => {
  return (
    <div className="mb-4">

      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ms-1 text-white" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              <a className="nav-link text-muted" href="#">About</a>
              <a className="nav-link text-muted" href="#">Services</a>
              <a className="nav-link text-muted" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;
import React from "react";
import "./style.css";

const Navbar = () =>
{
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div /**href="#"**/ className="navbar-brand text text-light">
        <h3>Chris Mikstas</h3>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text text-light" href="../Bootstap-Portfolio/assets/resume/Resume - Chris Mikstas.pdf">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text text-light" href="../Bootstap-Portfolio/portfolio.html">Return to Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
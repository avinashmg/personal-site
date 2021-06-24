import React, { useState } from "react";
import { ToggleButton } from "react-bootstrap";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar navbar-dark navbar-expand-md textwhite text-white navigation-clean">
      <div className="container">
        <a className="navbar-brand" href="#">
          Avinash M G
        </a>
        <button
          className="navbar-toggler"
          data-bs-target="#navcol-1"
          onClick={() => {
            setShow(show ? false : true);
          }}
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${show ? "show" : ""}`}
          id="navcol-1"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a class="nav-link active" href="#aboutme">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link active" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item ">
              <a class="nav-link active" href="#video">
                Video
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

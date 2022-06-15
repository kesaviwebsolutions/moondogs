import React from "react";
import Logo from "./Image/logo1.png";
import bg from "./Image/bgimg.jpg";

export default function Navbar() {
  return (
    <div>
      <section>
        {" "}
        <nav className="navbar navbar-expand-lg  ">
          <div className="container-fluid">
           
            <a className="navbar-brand" href="#home">
              <img src={Logo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#tokonomics">
                    Tokenomics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Roadmaps
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Audits
                  </a>
                </li>
              </ul>

              <button type="button" className="btn btn-outline-danger">
                Pancakeswap
              </button>
            </div>
          </div>
          <div className="bg">
          <img src={bg} className="background"alt=""/>
          </div>
        </nav>
      </section>
    </div>
  );
}

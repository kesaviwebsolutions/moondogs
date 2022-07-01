import React from "react";
import Logo from "./Image/herolo.png";

// import bg from "./Image/bg.jpg";
import {GiHamburgerMenu} from "react-icons/gi"

export default function Navbar() {
  return (
    <div>
      <section>
        <div id="navbar">
        {" "}
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#home">
              <img src={Logo} alt="" />
            </a>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <GiHamburgerMenu/>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ms-auto ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#tokonomics">
                    Tokenomics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#roadmap">
                    Roadmap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#faq">
                    Faq
                  </a>
                </li>
              </ul>

              <button type="button" className="btn btn-outline-warning">
                Pancakeswap
              </button>
            </div>
          </div>
          <div className="herobg">
            {/* <img src={bg} className="background"alt=""/> */}
          </div>
        </nav>
        </div>
      </section>
    </div>
  );
}

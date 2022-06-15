import React from "react";
import img3 from "../Image/img3.png";

export default function About() {
  return (
    <div>
      <section id="about" className="about">
        <div className="container-main">
          <div className="about-main container">
            <div className="row">
              <div className="col-md-6 ">
                <div className="about-para">
                  <h1 style={{ color: "#fff" }}>
                    PROJECT &amp; ECOSYSTEM
                  </h1>
                  <p style={{ color: "#fff" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia debitis dolore dignissimos? Esse temporibus
                    repudiandae harum voluptatum exercitationem architecto
                    similique ipsam tempore. Nostrum aperiam facere incidunt
                    inventore vero doloremque nemo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque culpa ipsa debitis, praesentium doloribus aliquam incidunt tempore atque, maiores quas ducimus vel eius ipsum sunt dolor minus nobis doloremque!
                  </p>
                  <button type="button" className="btn btn-danger">WHITEPAPER</button>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="about-img" style={{paddingTop: "100px", paddingBottom: '100px'}}>
                  <img src={img3} alt="" className="aboutimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

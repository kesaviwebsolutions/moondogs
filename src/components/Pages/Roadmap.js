import React from "react";
import Roadmapslider from "../Roadmapslider";
import Faq from "./Faq";
import Footer from "../Footer";

export default function Roadmap() {
  return (
    <div>
      <section id="testimonials" className="testimonials section-bg bg-dark">
        <div id="roadmap">
          <div className="contianer-ro">
            <div className="section-title"></div>
            <Roadmapslider />
            <Faq />
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}

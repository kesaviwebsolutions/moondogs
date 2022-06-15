import React from "react";
import moondogs from "./Image/moondogs.jpg";
export default function Home() {
  return (
    <div>
      <section>
        <div className="container text-left my-5" style={{ color: "white" }}>
          <div className="herosection ">
            <div className="row">
              <div className=" col-12 col-lg-5 col-md-12">
                <div className="herosection1">
                  <h1>MOONDOGS</h1>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt nesciunt voluptatibus eius. Obcaecati
                    eveniet at quos quaerat necessitatibus autem. Aut tempora
                    autem illum. Soluta facere optio blanditiis ab illum.
                  </p>
                  <div className="button">
                    <button type="button" class="btn btn-outline-danger">
                      Shinji Bridge
                    </button>
                  </div>
                  <div className="btn2 d-flex my-2 text-center">
                    <button type="button 2" class="btn btn-outline-danger">
                      Danger
                    </button>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-lg-5 col-md-12">
              <div className="herosection">
                <div className="main img ">
                <img src={moondogs} className="moon " />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react'
import moondogs from "./Image/hero.png";
import About from './Pages/About';

import Tokonomics from './Pages/Tokonomics';


export default function Main() {
  return (
    <div>
        <section>
          <div id='main'>
        <div className="container my-5" style={{ color: "white" }}>
          <div className="herosection">
            <div className="row">
              <div className=" col-md-6">
                <div className="herosection1">
                  <h1>MOONDOGS</h1>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt nesciunt voluptatibus eius. Obcaecati
                    eveniet at quos quaerat necessitatibus autem. Aut tempora
                    autem illum. Soluta facere optio blanditiis ab illum.
                  </p>
                  <div className="button">
                    <button type="button " className="btn btn-outline-warning">
                      BUY
                    </button>
                  </div>
                  <div className="btn2 d-flex my-2 text-center">
                    <button type="button 2" className="btn btn-outline-warning">
                      CHART
                    </button>
                  </div>
                </div>
              </div>
              <div className=" col-md-6">
              <div className="herosection">
                <div className="mainimg">
                <img src={moondogs} className="moon " />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <About/>
      <Tokonomics/>
    </div>
  )
}

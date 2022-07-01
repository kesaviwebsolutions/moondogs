import React from "react";

export default function Faq() {
  return (
    <div>
      <section className="container " style={{ marginTop: "200px" }}>
        <div id="faq">
          <h1
            style={{ color: "#FFC107", textAlign: "center", fontSize: "32px" }}
          >
            How to Buy Coin ?
          </h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  STEP 1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, quas animi totam iste quam perferendis molestias
                    impedit eligendi omnis aliquid corrupti sunt cupiditate
                    error accusantium possimus explicabo necessitatibus nulla
                    dolorum?
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  STEP 2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dicta voluptas officiis accusantium placeat officia
                    veritatis provident, similique, non maxime dolores
                    asperiores ipsum, veniam eligendi odit. Accusantium, odio
                    earum. Odio, nostrum!
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  STEP 3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, ratione sunt. Possimus sequi itaque aspernatur,
                    animi veniam tempora atque earum esse. In laudantium
                    incidunt neque vel perferendis cupiditate iure quas.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  STEP 4
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eum aperiam illum enim consectetur, tenetur pariatur vero
                    dolores perferendis magnam necessitatibus officiis ad
                    delectus quisquam non, est, beatae inventore animi sit.
                  </p>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </section>
    </div>
  );
}

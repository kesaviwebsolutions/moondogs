import { left } from "@popperjs/core";
import React from "react";

export default function Roadmapslider() {
  const collectionInfo = [
    {
      description:
        "Research And Development  Diploy smart contract Pancakeswap Launch Marketing campaign roll out CoinMarketCap Listing CoinMarketCap Listing",
    },
    {
      description:
        "Research And Development  Diploy smart contract Pancakeswap Launch Marketing campaign roll out CoinMarketCap Listing CoinMarketCap Listing",
    },
    {
      description:
        "Research And Development  Diploy smart contract Pancakeswap Launch Marketing campaign roll out CoinMarketCap Listing CoinMarketCap Listing",
    },
  ];
  const renderCollection = (collectionInfo, index) => {
    return (
      <div className="col-md-4" key={index} style={{padding:"40px 40px"}}>
        <div className="card" style={{   display:"block", margin:"auto" }}>
          <div className="card-body">
            <p className="card-text">{collectionInfo.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="heading-container">
        <h2
          className=""
          style={{
            textAlign: "center",
            text: "40px",
            color: "#FFC107",
            fontSize: "32px",
            marginTop: "150px"
          }}
        >
          Roadmap
        </h2>
      </div>
      <div
        className="slider-container"
        style={{ maxWidth: "1100px", margin: "auto" }}
      >
        <div className="row">
          {" "}
          {collectionInfo.map(renderCollection)}
          {console.log(collectionInfo.map(renderCollection))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import {
  FaBeer,
  FaTelegramPlane,
  FaTwitter,
  FaFacebookSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div id="footer">
    <div className="container footer-main" style={{text: "white"}}>
      <div className="row ">
        <div className="col-lg-4 ">
          <div className="footer">
            <br />
            <h5>COMMUNITY</h5>
            <ul>
              <a href="#">
                {" "}
                <li className="slink" > Telegram</li>
              </a>
              <a href="#">
                <li className="slink">Twitter</li>
              </a>
              <a href="#">
                {" "}
                <li className="slink">Discord</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="footer">
            <h5>LISTING</h5>
            <ul>
              <a href="#">
                <li className="clink">Bscscan</li>
              </a>
              <a href="#">
                {" "}
                <li className="clink">Pancakeswap</li>
              </a>
              <a href="#">
                {" "}
                <li className="clink">Chart</li>
              </a>
              <a href="#">
                {" "}
                <li className="clink">Coingecko</li>
              </a>
              <a href="#">
                <li className="clink">Coinmarketcap</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="footer">
            <h5>Support: support@moondogs.com</h5>
            <br />
            <p className="footerpara" style={{ color:"white"}}>
              Our community is growing stronger by the day. Follow us on our
              social media platforms to get the most up-to-date, and accurate
              Moondogs information.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="row ">
        <div className="col-lg-6 " style={{ color: "white"}}>
          &copy; 2022 MOONDOGS.All Rights Reserved
        </div>
        <div className="col-lg-6 ">
          <div className="social" >
            <a href="#" className="link">
              <FaTelegramPlane />
            </a>
            <a href="#" className="link">
              <FaTwitter />
            </a>
            <a href="#" className="link">
              <FaFacebookSquare />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

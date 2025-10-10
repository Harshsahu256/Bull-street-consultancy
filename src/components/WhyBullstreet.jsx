import React from "react";
import "../styles/Homestyle.css";
import { Link } from "react-router-dom";

const WhyBullstreet = () => {
  return (
    <>
      <div
        className="container-fluid paddingcustom"
        style={{ backgroundColor: "#ac1929" }}
      >
        <div className="container ">
          <h2 className="text-center text-white headingcommon pb-4">
            Why Bullstreet Consultancy?
          </h2>

          <section className="container">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="box  p-2 py-4  m-3 text-white text-center border-1 rounded-3 ">
                <h5>Guidance:</h5>
                <p className="consultancy">
                  Our team at Bullstreet Consultancy consists of experienced
                  financial analysts who provide exceptional guidance, backed by
                  years of expertise. We’re dedicated to helping you make
                  informed and strategic investment decisions.
                </p>
              </div>
              <div className="box  p-2 py-4  m-3 text-white text-center border-1 rounded-3 ">
                <h5>Cutting-Edge Technology:</h5>
                <p className="consultancy">
                  Utilizing the latest advancements in financial technology,
                  Bullstreet Consultancy offers advanced trading tools and
                  platforms that empower you to stay ahead of market trends,
                  execute trades efficiently, and manage your portfolio
                  seamlessly.
                </p>
              </div>
              <div className="box  p-2 py-4  m-3 text-white text-center border-1 rounded-3 ">
                <h5>Risk Management:</h5>
                <p className="consultancy">
                  Your financial security is our top priority. Our team employs
                  stringent risk management practices to help you navigate
                  market fluctuations and protect your investments from
                  unforeseen volatility.
                </p>
              </div>
              <div className="box p-2 py-4 m-3 text-white text-center border-1 rounded-3 ">
                <h5>Transparent Approach:</h5>
                <p className="consultancy">
                  Transparency is fundamental to our approach at Bullstreet
                  Consultancy. We provide clear and comprehensive information
                  about your investments, ensuring you have a complete
                  understanding of your portfolio and its performance.
                </p>
              </div>
              <div className="box p-2 py-4 m-3 text-white text-center border-1 rounded-3 ">
                <h5>Exceptional Customer Support:</h5>
                <p className="consultancy">
                  Our dedicated customer support team is available 24/7 to
                  assist you with any questions or concerns. Your satisfaction
                  is our commitment, and we’re here to provide prompt, reliable,
                  and friendly assistance whenever you need it.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="p-3" style={{ backgroundColor: "#e9e9e9" }}><Link to="/contact" className="text-decoration-none">
        <h5 className="text-center  connectwithus text-decoration-none">Connect With us Today</h5></Link>
      </section>
    </>
  );
};

export default WhyBullstreet;

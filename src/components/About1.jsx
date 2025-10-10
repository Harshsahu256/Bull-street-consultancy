import React from "react";

const About1 = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="row m-0 p-0">
          <div className="col-md-6 col-12 p-md-5 p-3 pt-5 d-flex flex-column justify-content-center align-content-center bgimageabout"
                  >
            <h2 className="headingcommon redheading">About Bullstreet Consultancy</h2>
            <div
              className="mb-4 mt-0 d-inline-block "
              style={{
                width: "90px",
                backgroundColor: "#ac1929",
                height: "5px",
              }}
            />
            <p className="common-para-product graycolor">
            At Bullstreet Consultancy, we believe in empowering clients to make informed, strategic financial decisions. Our expertise spans stock market investments, intraday and equity trading, and options trading, allowing us to deliver holistic financial solutions tailored to each client’s goals. Our team’s deep knowledge and passion for finance ensure that you receive insightful advice, customized strategies, and the support needed to thrive in an ever-changing market. Whether you're a first-time investor or a seasoned trader, Bullstreet Consultancy is dedicated to helping you succeed with integrity, precision, and a results-driven approach. Discover the confidence that comes with partnering with Bullstreet Consultancy on your financial journey.
            </p>
          </div>
          <div className="col-md-6 d-md-block d-none m-0 p-0">
            <img src="/other/9.png" width="100%" alt="About image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About1;

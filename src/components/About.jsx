import React from "react";

const About = () => {
  return (
    <>
      <div className="container-fluid bgimageabout m-0 p-0 my-5 ">
        <div className="row m-0 p-0">
          <div className="col-md-6 col-12 p-md-5 p-3 pt-5 d-flex flex-column justify-content-center align-content-center "
                  >
            <h2 className="headingcommon redheading">ABOUT Bullstreet Consultancy</h2>
            <div
              className="mb-4 mt-0 d-inline-block "
              style={{
                width: "90px",
                backgroundColor: "#ac1929",
                height: "5px",
              }}
            />
            <p className="common-para-product graycolor">
            Bullstreet Consultancy, a leading name in the financial consulting space, offers a comprehensive suite of services designed to empower clients in the fast-paced world of finance. Specializing in stock market investments, intraday trading, equity transactions, and options trading, we are committed to delivering exceptional financial solutions that cater to both new investors and seasoned market participants. At Bullstreet Consultancy, our focus on precision, reliability, and client satisfaction drives everything we do. Our expert team crafts tailored strategies to help you navigate the complexities of the stock market, building trust through results-driven advice. Join us, and let Bullstreet Consultancy be your partner in achieving sustainable financial growth and success.
            </p>
          </div>
          <div className="col-md-6 d-md-block d-none m-0 p-0">
            <img src="/other/5.png" width="100%"  alt="About image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

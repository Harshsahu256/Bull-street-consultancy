import React from "react";
import {
  FaInstagram,
  FaRegEnvelope,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { RiMapPin2Line } from "react-icons/ri";
import logo from "../../assets/footerlogo.png";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { FaTelegramPlane } from "react-icons/fa";

const MainFooter = () => {
  return (
    <div>
      <div className=" ">
        <footer className="text-center text-lg-start bg-dark text-white">
          {/* style={{backgroundColor: "#1c2331"}} */}
          {/* <section
                 className="d-flex justify-content-between p-4"
               style={{backgroundColor: "#6351ce"}}
                 >
      
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
        
          <div>
            <Link to="" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </section> */}

          <section className="pt-5">
            <div className="container-fluid text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <img
                    src={logo}
                    alt="Footer Logo"
                    height="80px"
                    width="280px"
                  />
                  {/* <h6 className="text-uppercase fw-bold">Company name</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width:"60px", backgroundColor:"#7c4dff", height:"2px"}}
                    /> */}
                  <p>
                    In the stock market, time is your ally, knowledge is your
                    power, and patience is your virtue. Embrace the
                    fluctuations, learn from the trends, and trust in your
                    strategy; for in the world of stocks, resilience leads to
                    rewards.
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Quick Links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <Link to="/" className="text-white">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link to="/about" className="text-white">
                      About{" "}
                    </Link>
                  </p>
                  <p>
                    <Link to="/products/equity" className="text-white">
                      Products
                    </Link>
                  </p>
                  <p>
                    <Link to="/package" className="text-white">
                      Package
                    </Link>
                  </p>
                  <p>
                    <Link to="/bank-detail" className="text-white">
                      Bank Detail
                    </Link>
                  </p>
                  <p>
                    <Link to="/contact" className="text-white">
                      Contact
                    </Link>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />

                  <p>
                    <Link to="/research" className="text-white">
                      Research
                    </Link>
                  </p>

                  <p>
                    <Link to="/support" className="text-white">
                      Support
                    </Link>
                  </p>
                  <p>
                    <Link to="/terms-and-condition" className="text-white">
                      Terms and Conditions
                    </Link>
                  </p>
                  <p>
                    <Link to="/privacy-policy" className="text-white">
                      Privacy Policy
                    </Link>
                  </p>

                  <p>
                    <Link to="/return-refund" className="text-white">
                      Refund Policy
                    </Link>
                  </p>
                  {/* <p>
                    <Link to="/disclosure" className="text-white">
                      Disclosure
                    </Link>
                  </p> */}
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <RiMapPin2Line className="me-3" />
                    JP Nagar, Bangalore -560078{" "}
                  </p>
                  <a
                    href="mailto:info@bullstreetconsultancy.in"
                    className="text-decoration-none"
                  >
                    <p className="text-white">
                      <FaRegEnvelope className="me-3" />
                      info@bullstreetconsultancy.in
                    </p>{" "}
                  </a>
                  <a href="tel:919685905899" className="text-decoration-none">
                    <p className="text-white">
                      <IoCallOutline className="me-3" /> +91 9516062699
                    </p>
                    <p className="text-white">
                      <IoCallOutline className="me-3" /> +91 9516064440
                    </p>
                  </a>

                  <div className="d-flex justify-content-start mt-2 mt-lg-0">
                    <a
                      className="btn btn-outline-light mx-1"
                      href="https://wa.link/nm5r3a"
                    >
                      <FaWhatsapp />
                    </a>
                    <a
                      className="btn btn-outline-light mx-1"
                      href="https://x.com/Consultanc41711?t=_O7-YXrz9Jj_Nadzfoy1oQ&s=08"
                    >
                      {" "}
                      <FaTwitter />
                    </a>
                    <a
                      className="btn btn-outline-light mx-1"
                      href="https://www.instagram.com/bullstreetconsultancy?igsh=eXRldHB2ejJkZHBy"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className="btn btn-outline-light mx-1"
                      href="https://t.me/BULLSTREET_CONSULTANCY"
                    >
                      <FaTelegramPlane />
                    </a>
                  </div>

                  {/* <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p> */}
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2024 Copyright Bullstreet Consultancy. All Rights Reserved.
          </div>

          <Marquee>
            <p
              className="m-0 p-0 headingpackage headingPackagePara"
              style={{ fontWeight: "600" }}
            >
              Investment in the stock market is subject to market risk, we DO
              NOT offer any guaranteed profit services or Fixed Returns
              Services. We DO NOT provide any assurance or guarantee of profit
              or returns with any of our services. Trading in the Stock Market
              may result in Partial or Complete loss of Gains as well as Initial
              Capital. Before taking our Research Alerts Services &amp; any
              services of Optionsmoney firm, Clients should read carefully the
              Disclaimer, Legal disclaimer, terms and conditions, refund policy
              and other policies of our company. We do not provide any
              recommendation or any services through Telegram/ Instagram/Etc .
              We DO NOT accept payment of Research Alerts Service fee in any
              personal or Individual bank account, all payments made should be
              done in Optionsmoney current account only..
            </p>
          </Marquee>
          <Marquee>
            <p
              className="m-0 p-0 pb-3 headingpackage headingPackagePara"
              style={{ fontWeight: "600" }}
            >
              Investing and Trading in stock market is risky. It Involves both
              profit and loss, Due to leverage both profit and loss are
              exaggerated, our research service gives research alerts for
              trading ideas in which both target and stop loss is mentioned,
              however execution of trade is solely the responsibility of the
              client. We DO NOT provide any trade execution services. All our
              research alerts are to be considered only as a reference tool and
              clients should not consider our research alerts as Personal
              Investment/Trading Advice in any condition. We DO NOT take any
              responsibility for any losses that the User may incur.
            </p>
          </Marquee>
        </footer>
      </div>
    </div>
  );
};

export default MainFooter;

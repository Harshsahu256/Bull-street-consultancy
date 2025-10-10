import React, { useEffect, useState } from "react";
import Homebanner from "../components/Homebanner";
import About from "../components/About";
import Rules from "../components/Rules";
import ConnectWithus from "../components/ConnectWithus";
import WhyBullstreet from "../components/WhyBullstreet";
import Testimonial from "../components/Testimonial";
import "../styles/Homestyle.css";

const Home = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // useEffect to check if the user has visited before
  useEffect(() => {
    // if (!localStorage.getItem('visited')) {
    setIsPopupVisible(true); // Show popup if it's the user's first visit
    // }
  }, []);

  // Function to handle closing the popup
  const handleClose = () => {
    setIsPopupVisible(false);
    // localStorage.setItem('visited', 'true'); // Set 'visited' key in localStorage
  };

  return (
    <>
      <div>
        {isPopupVisible && (
          <>
            <div className="overlay"></div>
            <div className="popup">
              <div className="popup-content">
                <h5
                  className="mb-0 w-100 text-white text-center "
                  style={{ backgroundColor: "#ac1929" }}
                >
                  RISK DISCLOSURES ON DERIVATIVES
                </h5>
                <div
                  className="mb-4 mt-3 d-inline-block "
                  style={{
                    width: "100%",
                    backgroundColor: "#ac1929",
                    height: "2px",
                  }}
                />
                <div className="p-md-5 p-4 pt-md-2 pt-2 ">
                  <ul>
                    <li>
                      9 out of 10 individual traders in equity Futures and
                      Option Segment, incurred net losses.
                    </li>
                    <li>
                      On an average, loss makers registered net trading loss
                      close to 50,000.
                    </li>
                    <li>
                      Over and above the net trading losses incurres, loss
                      makers expended an additional 28% of net trading losses as
                      transaction costs.
                    </li>
                    <li>
                      Those making net trading profits, incurred between 15% to
                      50% of such profits as transaction cost.
                    </li>
                  </ul>

                  <div className="d-flex flex-row gap-5">
                    <button onClick={handleClose} className="btn-popup">
                      Agree
                    </button>
                    <button onClick={handleClose} className="btn-popup">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Your app content goes here */}
      </div>
      <Homebanner />
      <About />
      <WhyBullstreet />
      <Rules />

      <Testimonial />
      <ConnectWithus image="/imgAssets/b (1).png" />
    </>
  );
};

export default Home;

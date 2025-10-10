import React, { useEffect, useState } from "react";
import "../styles/Homestyle.css";
import { TiArrowRightOutline } from "react-icons/ti";
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowDownOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
const Packagesdetail = () => {
  const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth<=789);
        window.addEventListener("resize" , handleResize) 
        return ()=>window.removeEventListener("resize" , handleResize)
      }, []);

      function gotoBank(){
        navigate("/bank-detail")
      }
      function gotoForm(){
        navigate("/contact")
      }
  return (
    <>
      <div
        className="container-fluid paddingcustom"
        style={{ backgroundColor: "#ac1929" }}
      >
        <div className="container p-5">
          <h2 className="text-center text-white headingcommon pb-4">
          BASIC SERVICE
          </h2>

          <div className="row">
            <div className="col-md-6 col-12  bg-white p-md-5 ps-3  pad-80">
              <div className="row">
                <div className="col-md-10 p-md-4 ps-3 col-12">
                  <h4 className=" headingpackage headingpackageFont ">
                    {" "}
                    BASIC SERVICE{" "}
                  </h4>
                  <p className="headingpackage headingpackageFontpara">
                  Charges 
                  </p>

                  <h2 className="headingpackage headingpackageFontprice">
                    ₹ 30,000/-
                  </h2>
                  <p className="headingpackage headingPackagePara">
                    *₹7,000/-Registration charges included

                  </p>
                </div>
                <div className="col-md-2 col-12 d-flex justify-content-center align-self-center">
                {isMobile ? <TiArrowDownOutline className="iconstyle" /> : <TiArrowRightOutline className="iconstyle" />}

                  {/* <TiArrowRightOutline className="iconstyle" />{" "} */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 p-md-5 ps-3 bg-dark pad-80 d-flex justify-content-center align-content-center aling-items-center flex-column ">
            <p className="text-white headingpackage headingpackageFontpara">
            KEY BENEFITS
                  </p>
              <ul className=""> 
                <li className="text-white headingPackageli">
                We Provide Total 1-2 recommendation On daily basis
                </li>
                <li className="text-white headingPackageli">
                We provide total 30 call in this package
                </li>
                <li className="text-white headingPackageli">
                Specially designed for intraday traders
                </li>
              </ul>
              <button className="mb-md-4 mb-0 fontstylecss btnpackage" onClick={gotoBank}>
              Subscribe Now
              </button>
            </div>
          </div>
          <div className="row   mt-0">
            <div className="col-md-6 col-12 p-md-5 ps-3 order-md-1 order-2 bg-dark pad-80 d-flex justify-content-center align-content-center aling-items-center flex-column ">
            <p className="text-white headingpackage headingpackageFontpara">
            NATURE OF RECOMMENDATION
                  </p>
              <ul className="">
                <li className="text-white headingPackageli">
                ALL recommendations based on INDEX Option Market
                </li>
                <li className="text-white headingPackageli">
                ALL recommendations with two TARGET and one SL

                </li>
                <li className="text-white headingPackageli">
                Traders who want to trade in INDEX OPTION

                </li>
              </ul>
              <button className="mb-md-4 mb-0 fontstylecss btnpackage" onClick={gotoForm}>
                Enquire Now
              </button>
            </div>
            <div className="col-md-6 col-12 p-md-5 ps-3 order-md-1 order-2  bg-white pad-80 d-flex justify-content-center align-content-center aling-items-center flex-column ">
            <p className="text-dark headingpackage headingpackageFontpara">
            BULL STREET BENEFITS
                  </p>
              <ul className="">
                <li className="text-dark headingPackageli">
                Access to login bull street service portal
                </li>
                <li className="text-dark headingPackageli">
                Real time recommendations via SMS, Service Portal And mobile App Notification
                </li>
                <li className="text-dark headingPackageli">
                Assign a dedicated relationship manager
                </li>
                <li className="text-dark headingPackageli">
                Daily market updates-opening Bell-Closinh Bell                </li>
              </ul>
              <button className="mb-md-4 mb-0 fontstylecss btnpackage1" onClick={gotoForm}>
                Enquire Now
              </button>
            </div>
          </div>
        </div>

<hr style={{color:"white"}}/>

<div className="container p-5">
          <h2 className="text-center text-white headingcommon pb-4">
          STANDARD SERVICE
          </h2>

          <div className="row">
            <div className="col-md-6 col-12  bg-white p-md-5 ps-3  pad-80">
              <div className="row">
                <div className="col-md-10 p-md-4 ps-3 col-12">
                  <h4 className=" headingpackage headingpackageFont ">
                    {" "}
                    STANDARD SERVICE{" "}
                  </h4>
                  <p className="headingpackage headingpackageFontpara">
                  Charges 
                  </p>

                  <h2 className="headingpackage headingpackageFontprice">
                    ₹ 50,000/-
                  </h2>
                  <p className="headingpackage headingPackagePara">
                    {/* *₹7,000/-Registration charges included */}

                  </p>
                </div>
                <div className="col-md-2 col-12 d-flex justify-content-center align-self-center">
                {isMobile ? <TiArrowDownOutline className="iconstyle" /> : <TiArrowRightOutline className="iconstyle" />}

                  {/* <TiArrowRightOutline className="iconstyle" />{" "} */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 p-md-5 ps-3 bg-dark pad-80 d-flex justify-content-center align-content-center aling-items-center flex-column ">
            <p className="text-white headingpackage headingpackageFontpara">
            KEY BENEFITS
                  </p>
              <ul className=""> 
                <li className="text-white headingPackageli">
                We Provide Total 1-2 recommendation On daily basis
                </li>
                <li className="text-white headingPackageli">
                We provide total 50 call in this package
                </li>
                <li className="text-white headingPackageli">
                Specially designed for intraday traders
                </li>
              </ul>
              <button className="mb-md-4 mb-0 fontstylecss btnpackage" onClick={gotoBank}>
              Subscribe Now
              </button>
            </div>
          </div>
          <div className="row   mt-0">
            <div className="col-md-6 col-12 p-md-5 ps-3 order-md-1 order-2 bg-dark pad-80 d-flex justify-content-center align-content-center aling-items-center flex-column ">
            <p className="text-white headingpackage headingpackageFontpara">
            NATURE OF RECOMMENDATION
                  </p>
              <ul className="">
                <li className="text-white headingPackageli">
                ALL recommendations based on INDEX Option Market
                </li>
                <li className="text-white headingPackageli">
                ALL recommendations with two TARGET and one SL

                </li>
                <li className="text-white headingPackageli">
                Both buy and sell calls will be given in this product
                </li>
                <li className="text-white headingPackageli">
                Recommendation count may vary based on the market conditions. </li>
              </ul>
              <button className="mb-md-4 mb-0 fontstylecss btnpackage" onClick={gotoForm}>
                Enquire Now
              </button>
            </div>
            <div className="col-md-6 col-12 p-md-5 ps-3 order-md-1 order-2  bg-white pad-80 d-flex justify-content-center align-content-center aling-items-center flex-column ">
            <p className="text-dark headingpackage headingpackageFontpara">
            BULL STREET BENEFITS                  </p>
              <ul className="">
                <li className="text-dark headingPackageli">
                Access to login bull street service portal</li>
                <li className="text-dark headingPackageli">
                Real time recommendations via SMS, Service Portal And mobile App Notification
                </li>
                <li className="text-dark headingPackageli">
                Assign a dedicated relationship manager
                </li>
                <li className="text-dark headingPackageli">
                Daily market updates-opening Bell-Closinh Bell
                </li>
              </ul>
              <button className="mb-md-4 mb-0 fontstylecss btnpackage1" onClick={gotoForm}>
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        
<hr style={{color:"white"}}/>

<div className="container p-5">
          <h2 className="text-center text-white headingcommon pb-4">
          PREMIUM SERVICE
          </h2>

          <div className="row">
            <div className="col-md-6 col-12  bg-white p-md-5 ps-3  pad-80">
              <div className="row">
                <div className="col-md-10 p-md-4 ps-3 col-12">
                  <h4 className=" headingpackage headingpackageFont ">
                    {" "}
                    PREMIUM SERVICE{" "}
                  </h4>
                  <p className="headingpackage headingpackageFontpara">
                  Charges
                  </p>

                  <h2 className="headingpackage headingpackageFontprice">
                    ₹ 70,000/-
                  </h2>
                  {/* <p className="headingpackage headingPackagePara">
                    *₹7,000/-Registration charges included

                  </p> */}
                </div>
                <div className="col-md-2 col-12 d-flex justify-content-center align-self-center">
                {isMobile ? <TiArrowDownOutline className="iconstyle" /> : <TiArrowRightOutline className="iconstyle" />}

                  {/* <TiArrowRightOutline className="iconstyle" />{" "} */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 p-md-5 ps-3 bg-dark pad-80 d-flex justify-content-center align-content-center aling-items-center flex-column ">
            <p className="text-white headingpackage headingpackageFontpara">
            KEY BENEFITS
                  </p>
              <ul className=""> 
                <li className="text-white headingPackageli">
                We Provide Total 3-4 recommendation On daily basis
                </li>
                <li className="text-white headingPackageli">
                We provide total 60 call in this package</li>
                <li className="text-white headingPackageli">
                Specially designed for intraday traders</li>
              </ul>
              <button className="mb-md-4 mb-0 fontstylecss btnpackage" onClick={gotoBank}>
              Subscribe Now
              </button>
            </div>
          </div>
          <div className="row   mt-0">
            <div className="col-md-6 col-12 p-md-5 ps-3 order-md-1 order-2 bg-dark pad-80 d-flex justify-content-center align-content-center aling-items-center flex-column ">
            <p className="text-white headingpackage headingpackageFontpara">
            NATURE OF RECOMMENDATION
                  </p>
              <ul className="">
                <li className="text-white headingPackageli">
                ALL recommendations based on STOCK Option Market  </li>
                <li className="text-white headingPackageli">
                ALL recommendations with two TARGET and one SL

                </li>
                <li className="text-white headingPackageli">
                Both buy and sell calls will be given in this product
                </li>  <li className="text-white headingPackageli">
                Recommendation count may vary based on the market conditions. </li>
              </ul>
              <button className="mb-md-4 mb-0 fontstylecss btnpackage" onClick={gotoForm}>
                Enquire Now
              </button>
            </div>
            <div className="col-md-6 col-12 p-md-5 ps-3 order-md-1 order-2  bg-white pad-80 d-flex justify-content-center align-content-center aling-items-center flex-column ">
            <p className="text-dark headingpackage headingpackageFontpara">
            NATURE OF RECOMMENDATION
                  </p>
              <ul className="">
                <li className="text-dark headingPackageli">
                Access to login bull street service portal  </li>
                <li className="text-dark headingPackageli">
              Real time recommendations via SMS, Service Portal And mobile App Notification
                </li>
                <li className="text-dark headingPackageli">
                 Assign a dedicated relationship manager
                </li>
                <li className="text-dark headingPackageli">
                Daily market updates-opening Bell-Closinh Bell  </li>
              </ul>
              <button className="mb-md-4 mb-0 fontstylecss btnpackage1" onClick={gotoForm}>
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        
<hr style={{color:"white"}}/>



{/* <div className="container p-5">
          <h2 className="text-center text-white headingcommon pb-4">
          Index Option (Combo Package)
          </h2>

          <div className="row">
            <div className="col-md-6 col-12  bg-white p-md-5  pe-md-0 ps-3  pad-80  d-flex flex-column justify-content-center align-items-center">
              <div className="row ">
                <div className="col-md-10 p-md-2 pe-md-2 ps-3 pe-0 col-12 my-auto">
                  <h4 className=" headingpackage headingpackageFont ">
                    {" "}
                    Combo Package{" "}
                  </h4>
                  <p className="headingpackage headingpackageFontpara">
                  MINIMUM BUDGET ₹ 3,00,000                  </p>

                  <h2 className="headingpackage headingpackageFontprice">
                  ₹2,75,000
                  </h2>
                  <p className="headingpackage headingPackagePara">
                    *All Prices are inclusive
                  </p>
                </div>
                <div className="col-md-2 col-12 d-flex justify-content-center align-self-center">
                  {
                  console.log(isMobile,"isMobile")}
                  {isMobile ? <TiArrowDownOutline className="iconstyle" /> : <TiArrowRightOutline className="iconstyle" />}
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 p-md-5 ps-3 bg-dark pad-80 d-flex justify-content-center align-content-center aling-items-center flex-column ">
              <ul className="">
                <li className="text-white headingPackageli">
                Get two to three research alert per day through WhatsApp broadcast message.
                </li>
                <li className="text-white headingPackageli">
                Get one to two research alerts of Bank Nifty Option or Nifty Option per day.
                </li>
                <li className="text-white headingPackageli">
                Get one to two research alerts of Finnifty every week.
                </li>
                <li className="text-white headingPackageli">
                Get one to two research alerts of Bankex or Sensex every week.
                </li>
                <li className="text-white headingPackageli">
                Get Expiry Special research alerts on every weekly expiry.                </li>
                <li className="text-white headingPackageli">
                Get well –researched target & Stop loss on every research alert.                </li>
                <li className="text-white headingPackageli">
                Live Market customer support is available                </li>
                <li className="text-white headingPackageli">
                Risk level – High to Very High                </li>
              </ul>
              <button className="mb-md-4 mb-0 fontstylecss btnpackage">
                Enquire Now
              </button>
            </div>
          </div>

      
        </div> */}
      </div>
    </>
  );
};

export default Packagesdetail;

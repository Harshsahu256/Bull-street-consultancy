import React from "react";
import { Breadcum } from '../components/Breadcum';

const Support = () => {
  return (
    <>
      <Breadcum title={"Support"} />
      <div className="container my-5">
        <h2 className=" headingcommon mt-4">Support</h2>
        <div
          className="mb-4 mt-4 d-inline-block "
          style={{
            width: "90px",
            backgroundColor: "#ac1929",
            height: "3px",
          }}
        />
        <p className=" bannerpara font400">
        At Option Money Research , our commitment to exceptional customer service forms the foundation of our operations. Our Support Policy is designed to ensure seamless assistance for all our clients, enabling them to achieve financial growth and market success.
        </p>

        <h4 className=" mb-3 headingbanner font600">
          Call Us At:
        </h4>

        
        <p className=" bannerpara font400">
       +91  9755197839
        </p>
        {/* <p className=" bannerpara font400">
        +91 9516064440
        </p> */}
        <h4 className=" mb-3 headingbanner font600">
          Mail Us At:
        </h4>
        <p className=" bannerpara font400">
        info@optionmoneyresearch.com         </p>
       </div>
    </>
  );
};

export default Support;

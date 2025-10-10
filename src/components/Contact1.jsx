import React from "react";
import Form from "./Form";

const Contact1 = () => {
  return (
    <div className="bgimagecontact formcss py-5 my-5">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-content-center ">
            <h4
              className="text-white mb-3 headingbanner"
              style={{ fontWeight: 600 }}
            >
              Office Business hours{" "}
            </h4>

            <p className="text-white bannerpara">
              9 Am to 6 Pm, Monday to Saturday{" "}
            </p>
            <div
              className="mb-4 mt-4 d-inline-block "
              style={{
                width: "90px",
                backgroundColor: "#fff",
                height: "3px",
              }}
            />

            <h4
              className="text-white mb-3 headingbanner"
              style={{ fontWeight: 600 }}
            >
              Customer support{" "}
            </h4>

            <a href="tel:919685905899" className="text-decoration-none">
                <p className="text-white text-decoration-none bannerpara">
                  +91 9516062699{" "}
                </p>
                {/* <p className="text-white text-decoration-none bannerpara">
                  +91 9516064440{" "}
                </p> */}
            </a>
            <div
              className="mb-4 mt-4 d-inline-block "
              style={{
                width: "90px",
                backgroundColor: "#fff",
                height: "3px",
              }}
            />

            <h4
              className="text-white mb-3 headingbanner"
              style={{ fontWeight: 600 }}
            >
              Email Us{" "}
            </h4>
            <a
              href="mailto:info@bullstreetconsultancy.in"
              className="text-decoration-none"
            >
              <p className="text-white bannerpara">
                info@bullstreetconsultancy.in{" "}
              </p>
            </a>
            <div
              className="mb-4 mt-4 d-inline-block "
              style={{
                width: "90px",
                backgroundColor: "#fff",
                height: "3px",
              }}
            />

            <h4
              className="text-white mb-3 headingbanner"
              style={{ fontWeight: 600 }}
            >
              Address{" "}
            </h4>

            <p className="text-white bannerpara">
              JP Nagar, Bangalore -560078{" "}
            </p>
            <div
              className="mb-4 mt-4 d-inline-block "
              style={{
                width: "90px",
                backgroundColor: "#fff",
                height: "3px",
              }}
            />
          </div>
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-content-center align-items-center">
            <h4 className="text-white headingbanner">Have any Queries? </h4>
            <div
              className="mb-4 mt-4 d-inline-block "
              style={{
                width: "90px",
                backgroundColor: "#fff",
                height: "3px",
              }}
            />

            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;

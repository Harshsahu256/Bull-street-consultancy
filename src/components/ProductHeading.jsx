import React from "react";
import "../styles/Product.css";

const ProductHeading = ({ title, description }) => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#ac1929 " }}>
      <div className="container py-5">
        <h2 className="headingcommon text-white text-center ">{title}</h2>
        <div
          className="mb-4 mt-0 d-inline-block "
          style={{
            width: "100%",
            backgroundColor: "#fff",
            height: "1px",
          }}
        />
        <p
          className="text-white common-para-product"
          style={{ textAlign: "justify" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductHeading;

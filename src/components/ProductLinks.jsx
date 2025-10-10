import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaCoins, FaPiggyBank, FaFileAlt, FaChartPie } from "react-icons/fa";

const ProductLinks = () => {
  const products = [
    { path: "/products/equity", icon: <FaChartLine />, title: "Equity" },
    { path: "/products/currency-derivatives", icon: <FaCoins />, title: "Currency Derivatives" },
    { path: "/products/mutual-funds", icon: <FaPiggyBank />, title: "Mutual Funds" },
    { path: "/products/ipo", icon: <FaFileAlt />, title: "IPO" },
    { path: "/products/equity-derivatives", icon: <FaChartPie />, title: "Equity Derivatives" },
  ];

  return (
    <div className="container-fluid m-0 p-0">
      {/* Hero Section */}
      <div className="bgimageproduct d-flex flex-column justify-content-center align-items-center  text-white p-5">
        <h1 className="text-center fw-bold display-5">Our Products</h1>
     
      {/* Product Links */}
      <div className="container py-5">
        <div className="row justify-content-center gy-4">
          {products.map((product, index) => (
            <div key={index} className="col-md-5 col-lg-4 text-center">
              <Link to={product.path} className="text-decoration-none">
                <div className="card shadow-lg border-0 product-card h-100">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <div className="icon-wrapper bg-danger text-white rounded-circle d-flex justify-content-center align-items-center mb-4">
                      {product.icon}
                    </div>
                    <h5 className="card-title text-dark fw-bold">{product.title}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      </div>

    </div>
  );
};

export default ProductLinks;

// import React from 'react'
// import { Link } from 'react-router-dom'

// const ProductLinks = () => {
//   return (
//     <div  className='container-fluid m-0 p-0' > 
      
//     <div className='bgimageproduct d-flex justify-content-center align-items-center  p-5 ' >
// <div className='row justify-content-around align-content-center pt-5'>
//     <p className='col-md-5 bg-danger text-white product-heading mx-md-5 text-center rounded-5 mt-md-5 mt-3 py-md-4 py-2 ' ><Link className='text-white text-decoration-none' to="/products/equity">Equity </Link></p>
//     <p className='col-md-5 bg-danger text-white product-heading mx-md-5 text-center rounded-5 mt-md-5 mt-3 py-md-4 py-2 ' ><Link className='text-white text-decoration-none' to="/products/currency-derivatives">Currency Derivatives </Link></p>
//     <p className='col-md-5 bg-danger text-white product-heading mx-md-5 text-center rounded-5 mt-md-5 mt-3 py-md-4 py-2 ' ><Link className='text-white text-decoration-none' to="/products/mutual-funds">Mutual Funds </Link></p>
//     <p className='col-md-5 bg-danger text-white product-heading mx-md-5 text-center rounded-5 mt-md-5 mt-3 py-md-4 py-2 ' ><Link className='text-white text-decoration-none' to="/products/ipo">IPO </Link></p>
//     <p className='col-md-5 bg-danger text-white product-heading mx-md-5 text-center rounded-5 mt-md-5 mt-3 py-md-4 py-2 ' ><Link className='text-white text-decoration-none' to="/products/equity-derivatives">Equity Derivatives </Link></p>
// </div>

//     </div>

//     </div>
//   )
// }

// export default ProductLinks

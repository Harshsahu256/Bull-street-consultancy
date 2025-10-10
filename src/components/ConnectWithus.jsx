import React from "react";
import { Link } from "react-router-dom";

const ConnectWithus = ({image}) => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-6 col-12">
          <img
            src={image}
            width="100%"
            height="auto"
            alt="About image"
          />
        </div>
        <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-content-center mt-md-1 mt-5 ps-5 ">
         <Link to='/contact'> 
          <button className="mb-4 fontstylecss contactbtn">Connect with Us Today</button></Link>
          <p className="font-bold fontstylecss rulepara "
          style={{fontWeight:"500" , fontSize:"20px"}}
          >Let us guide you to your<br/> Stock Market Success !</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithus;

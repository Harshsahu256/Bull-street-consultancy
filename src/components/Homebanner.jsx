import React from 'react'
import Form from './Form'
import '../styles/Homestyle.css'
const Homebanner = () => {
  return (
    <div  className='bgimagebsnner formcss py-5' >
    <div className="container" >
    <div className="row " >
      <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-content-center ">
      <h4 className='text-white headingbanner'>Greetings and welcome to the
     <span className='' style={{fontWeight:700}}> Bullstreet Consultancy</span> </h4>
        <h2 className= ' text-white headingcommon mt-4'>Empowering you with In-Depth Market Insights</h2>
        <div
          className="mb-4 mt-4 d-inline-block "
          style={{
            width: "90px",
            backgroundColor: "#fff",
            height: "3px",
          }}
        />
        
        <p className='text-white bannerpara'>
        Discover Bullstreet Consultancy – Your Trusted Source for Stock Market Expertise! Our team is here to guide you with personalized tips and strategies, revealing the secrets of the Indian market.   </p>
        <p className='text-white text-end mt-4 bannerpara'>Connect With Us Today</p>
      <div className='d-flex justify-content-end align-items-end'>
      <img src='/other/Arrow-1.png' className='text-end mb-5' width="280px"   />
      </div>
      </div>
      <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-content-center align-items-center">
      <Form/>
      </div>
    </div>
  </div>
  
  </div>
  )
}

export default Homebanner
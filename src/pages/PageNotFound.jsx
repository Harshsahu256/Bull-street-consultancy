import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (<>
        <div className="container my-5">
        <h2 className= ' headingcommon m-5 headingbanner text-center'>Opps Page Not Found!!!!</h2>
            
     <Link to='/'>
            <h4 className=" mb-3 headingbanner text-center" style={{ fontWeight: "600" }}>
           Goto Home Page
          </h4></Link>
        </div>
        </>
      );
  
}

export default PageNotFound
import React from 'react'
import Slider from 'react-slick';

const CompanyProfile = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            //   dots: true
            }
          }
        ]
      };
  return (
    <>
       <div className="container my-5">
        <h3 className="text-center common-heading-product ">
        Company Profile</h3>
       
        <p className="common-para-product graycolor">
        Option Money Research  Private Limited, incorporated in Indore in 2014, stands as one of the leading financial service providers in Central India. As a SEBI-registered Stock Broker (BSE and NSE) and a Depository Participant with CDSL, we have established a robust network of branches and business associates across various locations, ensuring seamless access to our services.
        </p>

        <p className="common-para-product graycolor" >Since our inception, Option Money Research  has been dedicated to delivering exceptional results to our clients, fostering trust and goodwill in the financial market. Our consistent growth and success story speak volumes about our commitment to development and client satisfaction. We believe in continuous improvement and provide investors with high-quality returns and unparalleled services.</p>
        <p className="common-para-product graycolor">As a trusted financial partner, we cater to a diverse clientele of investors engaged in trading public stocks and other securities. Our skilled team conducts thorough market research to deliver insightful recommendations, empowering our clients to make informed investment decisions and achieve the best possible outcomes. </p>
        <p className="common-para-product graycolor">At Option Money Research , our team of professionally trained experts is committed to enhancing our clients' market positions and safeguarding their interests. Through meticulous market studies, we guide our clients in navigating challenging market conditions, ensuring resilience during volatile bull runs. Our mission is to empower investors with knowledge and strategies that lead to sustained success in the financial world.</p>
      </div>

{/* Gallery part */}
<div
              className="my-5 mt-0 d-inline-block d-flex justify-content-center align-content-center"
              style={{
                width: "100%",
                backgroundColor: "#c3c3c3",
                height: "1px",
              }}
            />
      <div className="container mt-5 pb-4">
        <h3 className="text-center common-heading-product "> PHOTO GALLERY</h3>
        <p className="text-center common-para-product graycolor">
        The achievers place their trust in us, and this gallery stands as a testament to all the milestones we have reached together. It showcases the dedication and commitment we invest in our work and our clients. Every picture captured here represents the effort and passion that drives us, reminding us that our journey is one of continuous growth and excellence.
        </p>
        <p className="text-center common-para-product graycolor">The collection of images that defines our achievements will keep expanding, for we will never stop striving for success. We don't just aim to excel—we aim to excel beyond imagination, pushing boundaries and redefining possibilities at every turn.</p>
      

       <div className='my-5'>
       <Slider {...settings}>
        <div className='px-3 '>
        <img src="/imgAssets/p.png" width="100%" alt="About image" />
        </div>
        <div  className='px-3'>
        <img src="/imgAssets/p5.png" width="100%" alt="About image" />
        </div>
        <div  className='px-3'>
        <img src="/imgAssets/p1.png" width="100%" alt="About image" />
        </div>
        <div  className='px-3'>
        <img src="/imgAssets/p2.png" width="100%" alt="About image" />
        </div>
        <div  className='px-3'>
        <img src="/imgAssets/p3.png" width="100%" alt="About image" />
        </div>
        <div  className='px-3'>
        <img src="/imgAssets/p4.png" width="100%" alt="About image" />
        </div>
        <div  className='px-3'>
        <img src="/imgAssets/p6.png" width="100%" alt="About image" />
        </div>
        <div  className='px-3'>
        <img src="/imgAssets/p7.png" width="100%" alt="About image" />
        </div>
      </Slider>
       </div>
       
       </div>



    </>
  )
}

export default CompanyProfile
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <div className='container-fluid paddingcustom bgimageatestimonial' >
      <h5 className='text-white text-center headingcommon'>Clients Feedback</h5>
      <p className='text-white text-center bannerpara '>See what our clients think about us</p>
      <div className='bg-white mx-auto tesimonial-block p-md-5 p-2'>

      <Slider {...settings}>
      <div>
        <h3 className='text-center font-bold fontstylecss' >Rohan Jain</h3>
        <h6 className='text-center font-semibold fontstylecss'>Marketing Executive</h6>
        <p className='text-center fontstylecss'> Bullstreet Consultancy completely transformed my approach to investing. Their tailored strategies aligned seamlessly with my financial goals, and the expert guidance provided was invaluable. I've witnessed substantial growth in my portfolio, all thanks to their transparent and proactive approach.
        </p>

        </div>
      <div>
        <h3 className='text-center font-bold fontstylecss' >Rajesh Mehta</h3>
        <h6 className='text-center font-semibold fontstylecss'>Marketing Head</h6>
        <p className='text-center fontstylecss'>Bullstreet Consultancy exceeded all my expectations. Their transparent communication and customized investment plans helped me achieve impressive returns. The team’s dedication to my success made my investment journey smooth and rewarding. I'm incredibly satisfied with their exceptional services.</p>
        </div>
      <div>
        <h3 className='text-center font-bold fontstylecss' >Naresh Sharma</h3>
        <h6 className='text-center font-semibold fontstylecss'>Sales Executive</h6>
        <p className='text-center fontstylecss'>Choosing Bullstreet Consultancy was one of the best decisions for my financial journey. Their expert team and innovative strategies gave me the confidence to navigate the stock market with ease. Bullstreet’s personalized solutions and attentive support make them a standout in the industry. Highly recommended!</p>
</div>
      
    </Slider>

      </div>
    </div>
    </>
  )
}

export default Testimonial
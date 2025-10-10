import React from 'react'
import ProductLinks from '../components/ProductLinks'
import ProductHeading from '../components/ProductHeading'
import AboutWarning from '../components/AboutWarning'
import IPOAdvantage from '../components/IpoAdvantage'

const Ipo = () => {
  return (
    <div>
      <ProductLinks/>
      <ProductHeading title="IPO Service" description="Hopefully one day if you're an entrepreneur, you will build your company into a successful brand that can be publicly traded on a stock market. Essentially that is what an IPO, or Initial Public Offering, is. It is the process where a privately held company becomes a publicly traded company with the initial sale of its shares. First sale of shares by a company to the public is called IPO."/>
    <IPOAdvantage/>
    {/* <AboutWarning/> */}
    </div>
  )
}

export default Ipo

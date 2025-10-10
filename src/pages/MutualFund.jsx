import React from 'react'
import ProductLinks from '../components/ProductLinks'
import ProductHeading from '../components/ProductHeading'
import AboutWarning from '../components/AboutWarning'
import MutualAdvantage from '../components/MutualAdvantage'

const MutualFund = () => {
  return (
    <div>
    <ProductLinks/>
    <ProductHeading title="Mutual Fund" description={`Mutual Fund is a professionally managed investment fund that pools money from many investors to purchase securities. Mutual fund commonly applies to open-end investment companies that are collective investment vehicle that are regulated and sold to general public on daily basis.
Mutual Funds are generally classified on the basis of principal investments. The four main categories of funds are money market fund, Bond or fixed income fund, stock or equity funds or hybrid funds.

Investing is probably something you simply do not have the time or knowledge to get involved in. You are not the only one. This is why investing through mutual funds has become such a popular way of investing.`}/>
{/* <AboutWarning/> */}
<MutualAdvantage/>
    </div>
  )
}

export default MutualFund

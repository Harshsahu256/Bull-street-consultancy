import React from 'react'
import ProductLinks from '../components/ProductLinks'
import ProductHeading from '../components/ProductHeading'
import CurrenyDeriAdvantage from '../components/CurrencyDeriAdvantage'
// import AboutWarning from '../components/AboutWarning'

const CurrencyDerivatives = () => {
  return (
    <>
      <ProductLinks/>
      <ProductHeading title="Currency Derivatives" description="The currency derivative also know as FX future, is a future contract to exchange one currency for another at a date on future at the price fixed on the date of purchase. On National Stock Exchange the price of future contract is in terms of INR per unit of the other currency in which exchange has to be made. This kind of investment helps the person to hedge against future risk relating to fluctuation of currency market.
As Currency market is one the most volatile market Mandot Securities helps in assuring efficient management of risk in regards to this market and insure its clients against losses that they may be agonised by them during hard days for the market."/>
    {/* <AboutWarning/> */}
    <CurrenyDeriAdvantage/>
    </>
  )
}

export default CurrencyDerivatives

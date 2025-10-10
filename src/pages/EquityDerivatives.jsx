import React from 'react'
import ProductLinks from '../components/ProductLinks'
import ProductHeading from '../components/ProductHeading'
import AboutWarning from '../components/AboutWarning'
import EquityAdvanage from '../components/EquityAdvanage'
import EquityDeriAdvantage from '../components/EquityDeriAdvantage'

const EquityDerivatives = () => {
  return (
    <div>
      <ProductLinks/>
      <ProductHeading title="Equity Derivatives" description="A derivative is a security with a price that is dependent upon or derived from one or more underlyingassets.The most common underlying assets include stocks, bonds, commodities, currencies, interestrates and market indexes. Derivatives either be traded over-the- counter (OTC) or on an exchange.There are several different types of equity derivative; including options, warrants, futures, forwards,convertible bonds, and swaps. Each has its advantages, and each is often used in a particular situation."/>
    {/* <AboutWarning/> */}
    <EquityDeriAdvantage/>
    </div>
  )
}

export default EquityDerivatives

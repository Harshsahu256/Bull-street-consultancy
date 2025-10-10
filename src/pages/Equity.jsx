import React from 'react'
import ProductLinks from '../components/ProductLinks'
import ProductHeading from '../components/ProductHeading'
import AboutWarning from '../components/AboutWarning'
import EquityAdvanage from '../components/EquityAdvanage'

const Equity = () => {
  return (
    <>
      <ProductLinks/>
      <ProductHeading title="Equity" description="
      A stock or any other security representing an ownership interest & traded publically is called equity. In the equity market, investors bid for stocks by offering a certain price, and sellers ask for a specific price. When these two prices match, a sale occurs. Often, there are many investors bidding on the same stock. When this occurs, the first investor to place the bid is the first to get the stock."/>
    {/* <AboutWarning/> */}
    <EquityAdvanage/>
    
    </>
  )
}

export default Equity

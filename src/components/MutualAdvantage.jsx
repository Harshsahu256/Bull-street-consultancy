import React from 'react'
import '../styles/Product.css'
const MutualAdvantage = () => {
  return (
    <div className='container-fluid py-5' style={{backgroundColor:"#d7d7d7"}}>
    <div className=' container '>
        <div className='row gap-5'>
            <div className="col-md-6 col-12 gap-5">
                <h3 className='common-heading-product '>Advantages of investing in Mutual Fund</h3>
                <p className='common-para-product'><b>Increased Diversification : </b>Mutual funds typically hold a wide variety of securities, helping to reduce investment risk through diversification.</p>
                <p className='common-para-product'><b>Daily Liquidity: </b> Investors in open-end funds and unit investment trusts can sell their holdings back to the fund at the closing net asset value (NAV) of the day.</p>
                <p className='common-para-product'><b>Professional Investment Management: </b> Funds are managed by experienced portfolio managers who handle investment decisions, making it easier for investors to benefit from professional management.</p>
                <p className='common-para-product'><b>Affordability : </b>Even small investors can access large corporate shares through mutual funds. These funds buy and sell securities in bulk, lowering trading costs. Minimum investments, starting at Rs. 500 for a Systematic Investment Plan (SIP), make mutual funds accessible for everyone.</p>
                <p className='common-para-product'><b>Tax Benefits: </b>Investments held for over 12 months qualify for capital gains tax benefits, along with indexation benefits.</p>
                <p className='common-para-product'><b>More Choice:</b> Mutual funds offer a wide range of schemes to suit your changing financial goals and life stages. Your financial advisor can help you adjust your portfolio as your needs evolve.</p>
                <p className='common-para-product'><b>Regulatory Compliance: </b> All mutual funds are registered with SEBI (Securities Exchange Board of India) and must adhere to strict regulations, ensuring investor protection.</p>
            </div>
            <div className="col-md-5 col-12">
                <h5 className='common-heading2-product '>Benefits of investing in Mutual Fund using  Bullstreet Consultancy</h5>
                <div className='li-container'>
                    <ul >
                        <li className='text-start product-litag'>Bullstreet Consultancy keeps clients updated with the latest feeds and schemes from fund houses.</li>
                        <li className='text-start product-litag'>Our platform is continuously updated with ongoing news feeds on mutual funds and expert reactions to market changes.</li>
                        <li className='text-start product-litag'>Stay informed about the newest fund offers and opportunities to maximize your investments.</li>
                        <li className='text-start product-litag'>The tools and information provided help clients choose the best-suited schemes based on their individual needs.</li>
                        <li className='text-start product-litag'> Clients have continuous access to account information and support through our web-enabled back office, available round the clock.</li>
                    </ul>
                </div>
            </div>
        </div>  
    </div>
    </div>
  )
}

export default MutualAdvantage
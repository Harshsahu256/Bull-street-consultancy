import React from "react";

const ResearchAdvantage = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#ac1929 " }}>
        <div className="container py-5">
          <h2 className="headingcommon text-white text-center ">Research</h2>
          <div
            className="mb-4 mt-0 d-inline-block "
            style={{
              width: "100%",
              backgroundColor: "#fff",
              height: "1px",
            }}
          />
          <p
            className="text-white common-para-product"
            style={{ textAlign: "justify" }}
          >
            Investing in the stock market can feel like a gamble, especially
            with its volatility. With the market fluctuating unpredictably, it's
            hard to know where to invest. Option Money Research  offers a
            trusted, transparent approach to investing, ensuring no hidden terms
            or misleading conditions.
          </p>
          <p
            className="text-white common-para-product"
            style={{ textAlign: "justify" }}
          >
            Our expert team keeps you updated with the latest market insights,
            empowering you to make informed decisions. We provide thorough
            research to guide you through the market, helping you maximize
            returns and avoid risks. With Bullstreet, you’ll have the clarity
            and expertise you need to make confident investment choices.{" "}
          </p>
      
        <div className="d-flex flex-row gap-5 mt-5">
          <button className="btn-reasearch">Daily Intraday</button>
          <button className="btn-reasearch">IPO</button>
          <button className="btn-reasearch">Technical Analysis</button>
          <button className="btn-reasearch">Fundamental Analysis</button>
        </div>
      </div>
      </div>
      <div
        className="container-fluid py-5 "
        style={{ backgroundColor: "#d7d7d7" }}
      >
        <div className=" container ">
          <div className="row ">
            <div className="col-md-6 col-12 pe-md-5">
              <h3 className="common-heading-product mt-5">Top Picks</h3>
              <p className="common-para-product">
                Option Money Research ’s Top Picks section presents a curated
                list of the best stocks to invest in for maximum returns. The
                stocks featured in this list are selected after thorough
                research and analysis of the market, considering various factors
                that influence market performance and potential growth.
              </p>

              <h3 className="common-heading-product mt-5">Reports</h3>
              <p className="common-para-product">
                On our platform, you can access in-depth reports on
                high-performing companies that are prime candidates for
                investment. These reports offer the latest news, financial data,
                and insights on these companies, helping you make informed
                investment decisions.
              </p>

              <h3 className="common-heading-product mt-5">Experts’ Advice</h3>
              <p className="common-para-product">
                Our team of market experts provides daily updates and analyses
                to guide your investment journey. These expert insights help you
                assess whether your investment choices are likely to yield
                positive returns and determine if the companies you've invested
                in remain a trustworthy option in the market.
              </p>
            </div>

            <div className="col-md-6 col-12 pe-md-5">
              <h3 className="common-heading-product mt-5">IPO</h3>
              <p className="common-para-product">
                Stay updated with the latest Initial Public Offerings (IPOs) on
                the market. Option Money Research  provides timely information
                on new IPO opportunities, allowing you to evaluate the potential
                of these offers before making your investment decisions.
              </p>

              <h3 className="common-heading-product mt-5">Market Overview</h3>
              <p className="common-para-product">
                Our Market Overview report delivers daily news feeds on stock
                market trends, upcoming events, and key developments that could
                affect the market in the near future. This report serves as a
                comprehensive calendar of important updates, including daily
                stock market fluctuations and our expert-recommended stock
                picks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchAdvantage;

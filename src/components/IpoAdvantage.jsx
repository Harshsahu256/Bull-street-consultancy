import React from "react";
import "../styles/Product.css";
import { FaFilePdf } from "react-icons/fa6";
const IPOAdvantage = () => {
  return (
    <>
      <div
        className="container-fluid py-5 "
        style={{ backgroundColor: "#d7d7d7" }}
      >
        <div className=" container ">
          <div className="row gap-5">
            <div className=" col-12 p-3">
              <h3 className="text-center common-heading-product ">IPO</h3>
              <p className="common-para-product">
                In most cases, Initial Public Offerings (IPOs) are utilized by
                companies to expand their business, acquire assets, or
                distribute dividends to investors. During the dotcom boom, IPO
                investments often guaranteed exceptional returns, with numerous
                companies, such as Advanced Enzyme Technologies Ltd. and Quess
                Corp Ltd., experiencing substantial listing-day gains.
              </p>
              <p className="common-para-product">
                For retail investors, IPOs are often perceived as unique
                opportunities that come at the right time, offering lucrative
                returns. They are projected to deliver exceptional performance,
                often surpassing the returns of already-listed shares. This
                perception makes IPOs an attractive entry point into the equity
                market for new and experienced investors alike.
              </p>

              <p className="common-para-product">
                The high oversubscription in the retail investor quota for IPOs
                highlights their popularity as a secure and profitable
                investment option. For investors or new entrants aiming to
                achieve high portfolio returns and grow their capital in a short
                period, IPOs present a compelling opportunity. With the
                potential for significant gains on listing day and relatively
                low risk, IPOs are an excellent choice for those seeking to
                maximize their returns efficiently.
              </p>
              <p className="common-para-product">
                At Bullstreet Consultancy, we guide you through the IPO process,
                helping you make informed decisions and capitalize on these
                lucrative opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h3 className="text-center common-heading-product ">IPO Report</h3>
        <div className="row py-4 gap-md-0 gap-4">
          <div className="col-md-4 col-12 p-3">
            <FaFilePdf className="pdf-file" />
            <a
              href="/pdfs/CDSL_IPO_NOTE_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
             CDSL IPO NOTE
            </a>
          </div>

          <div className="col-md-4 col-12 p-3">
            {" "}
            <FaFilePdf className="pdf-file" />
            <a
              href="/pdfs/Shankara IPO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
             Shankara IPO 
            </a>
          </div>

          <div className="col-md-4 col-12 p-3">
            {" "}
            <FaFilePdf className="pdf-file" />
            <a
              href="/pdfs/Dmart_IPO_NOTE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Dmart IPO NOTE
            </a>
          </div>
      
         <div className="col-md-4 col-12 p-3">
            <FaFilePdf className="pdf-file" />
            <a
              href="/pdfs/Gold_Broucher.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
            Gold Broucher
            </a>
          </div>

          <div className="col-md-4 col-12 p-3">
            {" "}
            <FaFilePdf className="pdf-file" />
            <a
              href="/pdfs/Music Broadcast Ltd IPO Note.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
            Music Broadcast Ltd IPO Note
            </a>
          </div>

          <div className="col-md-4 col-12 p-3">
            {" "}
            <FaFilePdf className="pdf-file" />
            <a
              href="/pdfs/BSE LIMITED IPO NOTE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
            BSE LIMITED IPO NOTE
            </a>
          </div>
     

          <div className="col-md-4 col-12 p-3">
            <FaFilePdf className="pdf-file" />
            <a
              href="/pdfs/AU_FINANCE_IPO_NOTE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
             AU FINANCE IPO NOTE
            </a>
          </div>

          <div className="col-md-4 col-12 p-3 ">
            {" "}
            <FaFilePdf className="pdf-file" />
            <a
              href="/pdfs/Capaciteipo_note_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
             Capaciteipo Note
            </a>
          </div>

          <div className="col-md-4 col-12 p-3">
            {" "}
            <FaFilePdf className="pdf-file" />
            <a
              href="/pdfs/pratap_snacks_ipo_note_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
            Pratap Snacks IPO Note
            </a>
          </div>
          <div className="col-md-4 col-12 p-3">
            <FaFilePdf className="pdf-file" />
            <a
              href="/pdfs/Cochin_IPO_Note.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
AU Cochin IPO Note
            </a>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default IPOAdvantage;

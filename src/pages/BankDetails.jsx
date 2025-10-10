import React from "react";
import { Breadcum } from "../components/Breadcum";
import '../styles/Bankdetail.css'

const BankDetails = () => {
  const data = [
    { Bankdetail: "", SEGMENT: "", ACNO: "", IFSCCODE: "" },
    { Bankdetail: "", SEGMENT: "", ACNO: "", IFSCCODE: ""},
    { Bankdetail: "", SEGMENT: "", ACNO: "", IFSCCODE: ""},
    { Bankdetail: "", SEGMENT: "", ACNO: "", IFSCCODE: ""},
  ];
  return (
    <>
      <Breadcum title={"Bank Detail"} />
      {/* <MarqueePara/> */}
      <div className="container my-5">
        <h4
          className=" mb-3 headingbanner redheading"
          style={{ fontWeight: 600 }}
        >
          Bank Details: –
        </h4>

        <div
          className="mb-4 mt-4 d-inline-block "
          style={{
            width: "90px",
            backgroundColor: "#ac1929",
            height: "3px",
          }}
        />

  <p className='bankpara overflow-hidden'>Details of Client Bank Accounts</p>
  <p className=' bankpara overflow-hidden'>Remember to transfer only from the bank account registered with us</p>
 
 <div className="" style={{overflow:"auto"}}>
  <table className="styled-table">
        <thead>
          <tr> 
              <td colspan="4">Bullstreet Bank Details: Transfer funds to your Bullstreet account via NEFT, RTGS, IMPS, or through cheque deposit.</td>
          </tr>
          <tr> 
              <td colspan="4" >
              ACCOUNT NAME – BULLSTREET CONSULTANCY PRIVATE LIMITED USCNB</td>
          </tr>
          <tr>
            <th>Bankdetail</th>
            <th>SEGMENT</th>
            <th>A/C NO.</th>
            <th>	IFSC CODE</th>
          </tr>
        </thead>
        <tbody>
         {data.map((row) => (
            <tr key={row.id}>
              <td>{row.Bankdetail}</td>
              <td>{row.SEGMENT}</td>
              <td>{row.ACNO}</td>
              <td>{row.IFSCCODE}</td>
            </tr>
          ))}
           <tr> 
              <td colspan="4" style={{fontSize:"12px"}}>
                
"Investors are requested to note that Bullstreet Consultancy Private Limited is authorized to receive funds from investors only through designated bank accounts, known as Upstreaming Client Nodal Bank Accounts (USCNBA). Bullstreet Consultancy Private Limited is also obligated to disclose these USCNBA accounts to the Stock Exchange. Therefore, we request you to use only the specified USCNBA accounts for transactions in your trading account with us. The details of these USCNBA accounts are also available on the Stock Exchanges' websites under the section 'Know/Locate your Stock Broker.'"</td>
          </tr>
        </tbody>
      </table>
      </div>


      {/* <p className=' bankpara overflow-hidden ' style={{marginTop:"50px"}}>UPI : 9256462141-2@ybl</p>
 
      <p className=' bankpara overflow-hidden ' style={{marginTop:"30px"}}>Phone Pay :</p>
      <img src="/imgAssets/scanner1.png" width="400px" height="400px" alt="Phone pay Scanner"/>
      <img src="/imgAssets/scanner2.png" width="400px" height="400px" alt="Phone pay Scanner"/> */}

      </div>
    </>
  );
};

export default BankDetails;

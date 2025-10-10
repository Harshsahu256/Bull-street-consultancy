import React from "react";
import { Breadcum } from '../components/Breadcum';

const Return = () => {
  return (
    <>
      <Breadcum title={"Return & Refund Policy"} />
      <div className="container my-5">
        <h2 className=" headingcommon mt-4">Return & Refund Policy</h2>
        <div
          className="mb-4 mt-4 d-inline-block "
          style={{
            width: "90px",
            backgroundColor: "#ac1929",
            height: "3px",
          }}
        />
        <p className=" bannerpara font400">
          At Bullstreet Consultancy, we prioritize customer satisfaction and aim
          to provide the highest quality services. However, due to the nature of
          our services, all payments made are final. We do not offer any refunds
          or cancellations for services once they have been purchased.
        </p>

        <h4 className=" mb-3 headingbanner font600">
          1. No Refunds and No Cancellations
        </h4>
        <p className=" bannerpara font400">
          Before subscribing to our services, we encourage all potential clients
          to take advantage of our demo evaluation. This allows you to assess
          whether our services meet your needs before making a payment. Once a
          service has been subscribed to and payment has been made, it is
          non-refundable and non-cancellable under any circumstances.
        </p>
        <h4 className=" mb-3 headingbanner font600">
          2. Understanding the Services
        </h4>
        <p className=" bannerpara font400">
          We value our customers and strive to provide the best possible
          services. However, please be aware that we do not offer a 100%
          guarantee on our services, and results may vary based on individual
          performance. As such, we cannot offer refunds on subscriptions,
          regardless of the outcome or individual experience.
        </p>
        <h4 className=" mb-3 headingbanner font600">
          3. Satisfaction Guarantee
        </h4>
        <p className=" bannerpara font400">
          If for any unforeseen reason, you are dissatisfied with our services,
          we encourage you to contact our customer care team for guidance on
          future steps. We are committed to addressing your concerns and will
          make our best efforts to improve your satisfaction level. However, no
          refunds or cancellations will be issued in any case.
        </p>

        <h4 className=" mb-3 headingbanner font600">4. Risk Acknowledgment</h4>
        <p className=" bannerpara font400">
          Before subscribing to our services, we clearly communicate the
          potential risks, including the possibility of loss or gains. By
          subscribing to any of our services, you acknowledge that you
          understand and accept these risks.
        </p>

        <h4 className=" mb-3 headingbanner font600">5. No Refund Policy</h4>
        <p className=" bannerpara font400">
          We strongly believe in the quality and effectiveness of our services.
          As part of our commitment to transparency, we have implemented a
          strict No Refund Policy. We recommend that all visitors read and
          understand the following before making a payment:
        </p>
        <ul>
          <li className=" bannerpara font400">
            All information about our products, services, and client support
          </li>
          <li className=" bannerpara font400">
            The quality of our services by taking the demo
          </li>
          <li className=" bannerpara font400">Our Terms of Us</li>
          <li className=" bannerpara font400">Our Privacy Policy</li>
        </ul>

        <h4 className=" mb-3 headingbanner font600">6. Agreement</h4>
        <p className=" bannerpara font400">
          By making a payment for membership to Bullstreet Consultancy, you
          acknowledge that you have read and agree to the above No Refund and No
          Cancellation Policy.
        </p>
      </div>
    </>
  );
};

export default Return;

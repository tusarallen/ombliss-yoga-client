import { loadStripe } from "@stripe/stripe-js";
import TitleSection from "../../../components/TitleSection";
import CheckoutForms from "./CheckoutForms";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData, useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const paymentData = useLoaderData();
  const location = useLocation();
  const paymentId = location?.state?.paymentzid;

  return (
    <div>
      <TitleSection
        subHeading={"please provide?"}
        heading={"PAYMENT"}
      ></TitleSection>
      <Elements stripe={stripePromise}>
        <CheckoutForms paymentData={paymentData} paymentId={paymentId} />
      </Elements>
    </div>
  );
};

export default Payment;

import { loadStripe } from "@stripe/stripe-js";
import TitleSection from "../../../components/TitleSection";
import CheckoutForms from "./CheckoutForms";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const paymentData = useLoaderData();
  console.log(paymentData);


  return (
    <div>
      <TitleSection
        subHeading={"please provide?"}
        heading={"PAYMENT"}
      ></TitleSection>
      <Elements stripe={stripePromise}>
        <CheckoutForms paymentData={paymentData} />
      </Elements>
    </div>
  );
};

export default Payment;

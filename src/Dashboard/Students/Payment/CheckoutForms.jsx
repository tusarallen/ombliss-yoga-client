/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForms = ({ paymentData, paymentId, paymentClasses }) => {
  const [axiosSecure] = useAxiosSecure();

  const {
    classId,
    seat,
    enrolled,
    className,
    image,
    selectId: _id,
    courseId,
  } = paymentData;
  console.log(paymentClasses);

  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [calsses, setCalsses] = useState([]);

  const price = parseFloat(paymentData.price.toFixed(2));

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCalsses(data);
      });
  }, []);
  console.log(calsses);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    console.log("card", card);

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      // console.log("[paymentMethod]", paymentMethod);
      setCardError("");
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("paymentIntent", paymentIntent);

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const updatedSeat = calsses.map((cls) => {
        if (cls._id === paymentData.courseId) {
          fetch(`http://localhost:5000/classes/approved/${paymentData.courseId}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              seat: cls.seat - 1,
              enrolled: cls.enrolled + 1,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("available seat is here", data);
            });
        }
      });
      setCalsses(updatedSeat);
      //   if(cls._id === paymentData.courseId) {
      //     fetch(`/classes/approved/${paymentData.courseId}`), {
      //       method:"PUT",
      //       headers: {
      //         "content-type": "application/json",
      //       },
      //       body:JSON.stringify({seat:cls.seat - 1, enrolled:cls.enrolled + 1}),
      //     })
      //     .then(res => res.json())

      //     }
      //   }
      // });
      // setCalsses(updatedSeat);

      // save payment information to the server
      const payment = {
        email: user?.email,
        name: user?.displayName,
        transactionId: paymentIntent.id,
        price,
        classId,
        seat,
        enrolled,
        className,
        image,
        courseId,
        paymentId,
        date: new Date(),
        selectId: _id,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertPayment.deletePayment) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div className="bg-gray-200 rounded-md w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 font-bold text-blck rounded-md"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && (
          <p className="text-[red] ml-12my mt-5 font-bold bg-gray-50">
            {cardError}
          </p>
        )}
        {transactionId && (
          <p className="text-green-500 ml-12my mt-5 font-bold">
            Transaction complete with transactionId: {transactionId}
          </p>
        )}
        <button
          className="btn text-white ml-32 mt-8 hover:text-black p-2 font-bold text-xl bg-black hover:bg-[red] mb-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay here
        </button>
      </form>
    </div>
  );
};

export default CheckoutForms;

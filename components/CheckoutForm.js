import React, { useEffect, useState, useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import Block from "./checkout/Block";
import BillingDetailsFields from "./checkout/BillingDetailsFields";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function PaymentButton() {
  const stripe = useStripe();
  const elements = useElements();

  const [checkoutError, setCheckoutError] = useState();
  const [isProcessing, setIsProcessing] = useState(false);

  const bookingContext = useContext(BookingContext);

  const handleCardDetailsChange = (e) => {
    e.error ? setCheckoutError(e.error.message) : setCheckoutError();
  };

  // useEffect(() => {
  //   if (!stripe) {
  //     return;
  //   }

  //   const clientSecret = new URLSearchParams(window.location.search).get(
  //     "payment_intent_client_secret"
  //   );

  //   if (!clientSecret) {
  //     return;
  //   }

  //   stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //     switch (paymentIntent.status) {
  //       case "succeeded":
  //         setMessage("Payment succeeded!");
  //         break;
  //       case "processing":
  //         setMessage("Your payment is processing.");
  //         break;
  //       case "requires_payment_method":
  //         setMessage("Your payment was not successful, please try again.");
  //         break;
  //       default:
  //         setMessage("Something went wrong.");
  //         break;
  //     }
  //   });
  // }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const billingDetails = {
      name: e.target.name.value,
      email: e.target.email.value,
      address: {
        line1: e.target.address.value,
        city: e.target.city.value,
        postal_code: e.target.postcode.value,
      },
    };

    setIsProcessing(true);

    const cardElement = elements.getElement("card");

    try {
      const { data: clientSecret } = await axios.post("/api/payment_intents", {
        amount: bookingContext.bookingData.price * 100,
      });

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails,
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setIsProcessing(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      if (error) {
        setCheckoutError(error.message);
        setIsProcessing(false);
        return;
      }

      onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  const iframeStyles = {
    base: {
      color: "#fff",
      fontSize: "16px",
      iconColor: "#fff",
      "::placeholder": {
        color: "#87bbfd",
      },
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE",
    },
    complete: {
      iconColor: "#cbf4c9",
    },
  };

  const cardElementOptions = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
  };

  return (
    <form onSubmit={handleSubmit}>
      <Block>
        <BillingDetailsFields />
      </Block>

      <Block>
        <CardElement
          options={cardElementOptions}
          onChange={handleCardDetailsChange}
        />
      </Block>

      {checkoutError && <div>{checkoutError}</div>}

      <Block>
        <div className="flex flex-col items-center">
          <button disabled={isProcessing || !stripe} id="submit">
            {isProcessing ? "Processing..." : "Pay now"}
          </button>
        </div>
      </Block>
    </form>
  );
}

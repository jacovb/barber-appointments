import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { BookingContext } from "../context/BookingContext";
import Block from "./checkout/Block";
import BillingDetailsFields from "./checkout/BillingDetailsFields";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [checkoutError, setCheckoutError] = useState();
  const [isProcessing, setIsProcessing] = useState(false);

  const bookingContext = useContext(BookingContext);
  let treatment = bookingContext.treatments.filter(
    (treatment) =>
      treatment.id === bookingContext.bookingData.bookingTreatmentId
  )[0];

  const handleCardDetailsChange = (e) => {
    e.error ? setCheckoutError(e.error.message) : setCheckoutError();
  };

  function onSuccessfulCheckout() {
    bookingContext.setBookingData({
      ...bookingContext.bookingData,
      paid: true,
    });
    bookingContext.createBooking();
    router.push("/confirmation");
  }

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
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();

      const { data: clientSecret } = await axios.post(
        "/api/payment_intents",
        {
          amount: treatment.price * 100,
        },
        {
          cancelToken: source.token,
        }
      );

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
      source.cancel("Operation Canceled");
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
    <form onSubmit={handleSubmit} autoComplete="off">
      <Block>
        <BillingDetailsFields />
      </Block>

      <Block>
        <CardElement
          options={cardElementOptions}
          onChange={handleCardDetailsChange}
        />
      </Block>

      {checkoutError && (
        <div className="flex items-center justify-center w-96 h-fit text-red-500 p-2 m-2">
          {checkoutError}
        </div>
      )}

      <button
        disabled={isProcessing || !stripe}
        id="submit"
        className="w-96 py-3 mt-3 mx-4 mb-4 bg-neumorph shadow-neumorph rounded-lg border border-white text-white border-opacity-0 transition duration-200 hover:border-opacity-100 hover:bg-red-700"
      >
        {isProcessing ? "Processing..." : "Pay now"}
      </button>
    </form>
  );
}

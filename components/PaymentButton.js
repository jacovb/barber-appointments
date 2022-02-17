import React, { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PaymentButton() {
  const bookingContext = useContext(BookingContext);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/checkout_sessions", {
      item: bookingContext.bookingData,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        type="submit"
        role="link"
        onClick={createCheckoutSession}
        className="w-64 py-2 m-4 bg-neumorph shadow-neumorph rounded-lg border border-white border-opacity-0 transition duration-200 hover:border-opacity-100 hover:bg-red-700"
      >
        Payment
      </button>
    </div>
  );
}

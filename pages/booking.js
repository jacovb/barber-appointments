import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import BookingSummary from "../components/BookingSummary";
import CheckoutForm from "../components/CheckoutForm";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Booking() {
  const authContext = useContext(AuthContext);

  return (
    <div className="bg-neumorph min-h-screen flex flex-col items-center">
      <p className="text-2xl text-white my-3">
        {authContext.currentUserDetails.name || authContext.userInfo.email} -
        Booking Overview
      </p>
      <BookingSummary />
      <div className="App">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}

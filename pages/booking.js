import BookingSummary from "../components/BookingSummary";
import CheckoutForm from "../components/CheckoutForm";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Booking() {
  return (
    <div className="bg-neumorph min-h-screen flex flex-col items-center">
      <div className="flex flex-row items-center">
        <div className="invisible w-0 sm:w-24 h-px bg-white my-8 sm:visible" />
        <h1 className="text-4xl text-white m-6">Booking Overview</h1>
        <div className="invisible w-0 sm:w-24 h-px bg-white my-8 sm:visible" />
      </div>
      <BookingSummary />
      <div className="App">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}

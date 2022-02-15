import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { BookingContext } from "../context/BookingContext";
import { loadStripe } from "@stripe/stripe-js";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function PaymentButton() {
  const bookingContext = useContext(BookingContext);
  const router = useRouter();
  const { success, canceled } = router.query;

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log("Order placed! You will receive an email confirmation.");
      }

      if (canceled) {
        console.log(
          "Order canceled -- continue to shop around and checkout when you’re ready."
        );
      }
    }
  }, [success, canceled]);

  return (
    <div className="flex flex-col items-center">
      <form action="/api/checkout_sessions" method="POST">
        <section>
          <button
            type="submit"
            role="link"
            // onClick={() => {
            //   bookingContext.createBooking();
            //   router.push("/");
            // }}
            className="w-64 py-2 m-4 bg-neumorph shadow-neumorph rounded-lg border border-white border-opacity-0 transition duration-200 hover:border-opacity-100 hover:bg-red-700"
          >
            Payment
          </button>
        </section>
      </form>
    </div>
  );
}

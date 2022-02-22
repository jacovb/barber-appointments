import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BookingContext } from "../context/BookingContext";
import BookingEditModal from "./BookingEditModal";
import { PencilAltIcon } from "@heroicons/react/outline";
import PaymentButton from "./PaymentButton";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function BookingSummary() {
  const [clientSecret, setClientSecret] = useState("");
  const bookingContext = useContext(BookingContext);
  let treatment = bookingContext.treatments.filter(
    (treatment) => treatment.stripeApi === bookingContext.bookingData.stripeApi
  )[0];

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: bookingContext.bookingData }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {console.log("treatment", treatment)}
      {/* {console.log("Booking Data BS", bookingContext.bookingData)} */}
      <div className="relative w-96 h-fit bg-neumorph shadow-neumorphInset text-white p-4 m-4 rounded-lg">
        <div className="grid grid-cols-2 text-lg">
          <p className="mx-4 my-1 text-gray-400 justify-self-end">Treatment:</p>
          <p className="mx-4 my-1">{treatment.title}</p>
          <p className="mx-4 my-1 text-gray-400 justify-self-end">Date:</p>
          <p className="mx-4 my-1">{bookingContext.bookingData.date}</p>
          <p className="mx-4 my-1 text-gray-400 justify-self-end">Time:</p>
          <p className="mx-4 my-1">{bookingContext.bookingData.time}</p>
          <p className="mx-4 my-1 text-gray-400 justify-self-end">Price:</p>
          <p className="mx-4 my-1">£{treatment.price}</p>
        </div>
        <button
          onClick={() => bookingContext.setEditModalOpen(true)}
          className="outline-none h-5 w-5 absolute top-5 right-5 hover:text-red-500 transition duration-200"
        >
          <PencilAltIcon />
        </button>
        <div className="App">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <PaymentButton />
            </Elements>
          )}
        </div>
      </div>
      <BookingEditModal />
    </>
  );
}

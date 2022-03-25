import { useContext, useEffect, useState } from "react";
import { BookingContext } from "../context/BookingContext";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

export default function Confirmation() {
  const bookingContext = useContext(BookingContext);
  const authContext = useContext(AuthContext);
  const [bookingInfo, setBookingInfo] = useState(bookingContext.bookingData);
  const router = useRouter();
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const stripeUrl = "https://js.stripe.com/v3/";

    if (!document.querySelector("#stripe-js")) {
      const script = document.createElement("script");
      script.async = true;
      script.id = "stripe-js";
      script.onload = () => {
        setStripe(window.Stripe(stripeKey));
      };
      document.body.appendChild(script);
      script.src = stripeUrl;
    } else if (window.Stripe) {
      setStripe(window.Stripe(stripeKey));
    }

    return () => {
      window.location.reload();
    };
  }, []);

  let treatment = bookingContext.treatments.filter(
    (treatment) => treatment.id === bookingInfo.bookingTreatmentId
  )[0];

  if (!treatment) {
    router.push("/");
  }

  useEffect(() => {
    bookingContext.resetBookingData();
  }, []);

  return (
    <div className="bg-neumorph min-h-fit flex flex-col items-center text-white">
      <div className="flex flex-row items-center">
        <div className="invisible w-0 sm:w-24 h-px bg-white my-8 sm:visible" />
        <h1 className="text-4xl m-6">Order Confirmation</h1>
        <div className="invisible w-0 sm:w-24 h-px bg-white my-8 sm:visible" />
      </div>
      <div className="grid grid-cols-2 text-lg">
        <p className="mx-4 my-1 text-gray-400 justify-self-end">Name:</p>
        <p className="mx-4 my-1">
          {`${authContext.currentUserDetails.name} ${authContext.currentUserDetails.surname}`}
        </p>
        <p className="mx-4 my-1 text-gray-400 justify-self-end">Treatment:</p>
        <p className="mx-4 my-1">{treatment.title}</p>
        <p className="mx-4 my-1 text-gray-400 justify-self-end">Date:</p>
        <p className="mx-4 my-1">{bookingInfo.date}</p>
        <p className="mx-4 my-1 text-gray-400 justify-self-end">Time:</p>
        <p className="mx-4 my-1">{bookingInfo.time}</p>
        <p className="mx-4 my-1 text-gray-400 justify-self-end">Price:</p>
        <p className="mx-4 my-1">£{treatment.price}</p>
      </div>
    </div>
  );
}

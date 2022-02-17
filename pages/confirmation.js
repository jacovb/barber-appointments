import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { BookingContext } from "../context/BookingContext";
import { useRouter } from "next/router";

export default function Confirmation() {
  const authContext = useContext(AuthContext);
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
    <div>
      {console.log("Booking Data @ Confirmation", bookingContext.bookingData)}
      {success ? "Your order was Successful" : "Your order was Canceled"}
    </div>
  );
}

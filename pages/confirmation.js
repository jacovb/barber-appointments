import { useContext, useEffect, useState } from "react";
import { BookingContext } from "../context/BookingContext";

export default function Confirmation() {
  const bookingContext = useContext(BookingContext);

  return (
    <div>
      {console.log("Booking Data @ Confirmation", bookingContext.bookingData)}
      Your order was Successful
    </div>
  );
}

import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export default function BookingButton() {
  const bookingContext = useContext(BookingContext);

  return (
    <button
      onClick={() => {
        bookingContext.createBooking();
        console.log("Booking Button Pressed");
      }}
    >
      Book
    </button>
  );
}

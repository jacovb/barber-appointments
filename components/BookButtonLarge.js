import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export default function BookButtonLarge() {
  const bookingContext = useContext(BookingContext);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => {
          bookingContext.setBookingModalOpen(true);
        }}
        className="w-64 h-36 mt-2 text-3xl bg-red-700 shadow-neumorph rounded-lg border border-white border-opacity-0 hover:border-opacity-100 hover:bg-red-900"
      >
        Book Now
      </button>
    </div>
  );
}

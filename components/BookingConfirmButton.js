import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export default function BookingConfirmButton() {
  const bookingContext = useContext(BookingContext);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => {
          if (
            bookingContext.bookingData.date &&
            bookingContext.bookingData.time &&
            bookingContext.bookingData.bookingTreatmentId &&
            bookingContext.bookingData.bookingUserId
          ) {
            bookingContext.setEditModalOpen(false);
          }
        }}
        className="w-450 py-2 m-4 bg-neumorph shadow-neumorph rounded-lg border border-white border-opacity-0 transition duration-200 hover:border-opacity-100 hover:bg-red-700"
      >
        Confirm Booking
      </button>
    </div>
  );
}

import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export default function BookButtonText() {
  const bookingContext = useContext(BookingContext);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => {
          bookingContext.setBookingData({
            ...bookingContext.bookingData,
            bookingTreatmentId: "",
            date: new Date().toISOString().split("T")[0],
          });
          bookingContext.setBookingModalOpen(true);
        }}
        className="ml-6 hover:text-red-500 hover:font-medium transition duration-200"
      >
        Book Online
      </button>
    </div>
  );
}

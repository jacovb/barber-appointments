import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export default function BookingSummary() {
  const bookingContext = useContext(BookingContext);

  return (
    <div className="w-450 h-fit bg-neumorph shadow-neumorph text-white p-4 m-4">
      {console.log(bookingContext.bookingData)}
      {console.log(bookingContext.treatments)}
      <p>
        Treatment:{" "}
        {
          bookingContext.treatments.filter(
            (treatment) =>
              treatment.id === bookingContext.bookingData.bookingTreatmentId
          )[0].title
        }
      </p>
      <p>Date: {bookingContext.bookingData.date}</p>
      <p>Time: {bookingContext.bookingData.time}</p>
    </div>
  );
}

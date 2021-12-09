import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export default function BookingForm() {
  const bookingContext = useContext(BookingContext);

  return (
    <>
      <form>
        <div>
          <label htmlFor="treatmentSelect">Treatment:</label>
          <select
            type="text"
            id="treatmentSelect"
            value={bookingContext.bookingData.treatment}
            name="bookingTreatmentId"
            required
            onChange={bookingContext.handleBookingEntry}
            className="text-black text-sm ml-4"
          >
            <option value="" hidden disabled></option>
            {bookingContext.treatments.map((treatment, idx) => (
              <option key={idx} value={treatment.id}>
                {treatment.title}
              </option>
            ))}
          </select>
        </div>
      </form>
    </>
  );
}

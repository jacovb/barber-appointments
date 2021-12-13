import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export default function TreatmentPicker() {
  const bookingContext = useContext(BookingContext);

  return (
    <>
      <form>
        <div className="flex flex-col items-center">
          <label htmlFor="treatmentSelect" className="w-450 text-left">
            Treatment:
          </label>
          <select
            type="text"
            id="treatmentSelect"
            value={bookingContext.bookingData.treatment}
            name="bookingTreatmentId"
            required
            onChange={bookingContext.handleBookingEntry}
            className="text-white text-sm w-450 h-10 py-2 pl-3 pr-10 mt-2 mb-4 text-left bg-neumorph rounded-lg shadow-neumorph cursor-default border-none outline-none focus:ring-0"
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

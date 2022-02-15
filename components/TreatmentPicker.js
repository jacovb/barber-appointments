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
            value={bookingContext.bookingData.stripeApi}
            name="stripeApi"
            required
            onChange={bookingContext.handleBookingEntry}
            className="text-white text-sm w-450 h-10 py-2 pl-3 pr-10 mt-2 mb-4 text-left bg-neumorph rounded-lg shadow-neumorph cursor-default border-none outline-none focus:ring-0"
          >
            <option value="" disabled>
              Please select a Product...
            </option>
            {bookingContext.treatments.map((treatment) => (
              <option key={treatment.id} value={treatment.stripeApi}>
                {treatment.title} £{treatment.price}
              </option>
            ))}
          </select>
        </div>
      </form>
    </>
  );
}

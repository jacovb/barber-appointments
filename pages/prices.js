import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import PriceItem from "../components/PriceItem";

export default function Prices() {
  const bookingContext = useContext(BookingContext);

  function handleBooking() {
    bookingContext.setBookingModalOpen(true);
  }

  return (
    <div className="flex flex-col items-center bg-neumorph text-white h-screen">
      <h1 className="text-2xl">Treatment Prices</h1>
      {console.log(bookingContext.treatments)}
      {bookingContext.treatments.map((treatment, idx) => (
        <PriceItem
          key={idx}
          treatment={treatment}
          handleBooking={handleBooking}
        />
      ))}
    </div>
  );
}

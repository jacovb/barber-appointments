import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import PriceItem from "../components/PriceItem";
import BookingModal from "../components/BookingModal";

export default function Prices() {
  const bookingContext = useContext(BookingContext);

  return (
    <>
      <div className="flex flex-col items-center bg-neumorph text-white min-h-min">
        <div className="flex flex-row items-center">
          <div className="invisible w-0 sm:w-24 h-px bg-white my-8 sm:visible" />
          <h1 className="text-4xl m-6">Treatment Prices</h1>
          <div className="invisible w-0 sm:w-24 h-px bg-white my-8 sm:visible" />
        </div>
        {bookingContext.treatments.map((treatment, idx) => (
          <PriceItem key={idx} treatment={treatment} />
        ))}
      </div>
      <BookingModal />
    </>
  );
}

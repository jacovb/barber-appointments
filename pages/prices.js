import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import PriceItem from "../components/PriceItem";
import BookingModal from "../components/BookingModal";

export default function Prices() {
  const bookingContext = useContext(BookingContext);

  return (
    <>
      <div className="flex flex-col items-center bg-neumorph text-white h-screen">
        <div className="flex flex-row items-center">
          <div className="w-24 h-px bg-white my-8" />
          <h1 className="text-4xl m-6">Treatment Prices</h1>
          <div className="w-24 h-px bg-white my-8" />
        </div>
        {bookingContext.treatments.map((treatment, idx) => (
          <PriceItem key={idx} treatment={treatment} />
        ))}
      </div>
      <BookingModal />
    </>
  );
}

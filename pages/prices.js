import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import PriceItem from "../components/PriceItem";
import BookingModal from "../components/BookingModal";

export default function Prices() {
  const bookingContext = useContext(BookingContext);

  return (
    <>
      <div className="flex flex-col items-center bg-neumorph text-white h-screen">
        <h1 className="text-4xl my-6">Treatment Prices</h1>
        {bookingContext.treatments.map((treatment, idx) => (
          <PriceItem key={idx} treatment={treatment} />
        ))}
      </div>
      <BookingModal />
    </>
  );
}

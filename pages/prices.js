import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import PriceItem from "../components/PriceItem";
import BookingModalXX from "../components/BookingModalXX";

export default function Prices() {
  const bookingContext = useContext(BookingContext);

  return (
    <>
      <div className="flex flex-col items-center bg-neumorph text-white h-screen">
        <h1 className="text-2xl mb-4">Treatment Prices</h1>
        {console.log(bookingContext.treatments)}
        {bookingContext.treatments.map((treatment, idx) => (
          <PriceItem key={idx} treatment={treatment} />
        ))}
      </div>
      <BookingModalXX />
    </>
  );
}

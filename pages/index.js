import { useEffect, useContext } from "react";
import BookingModal from "../components/BookingModal";
import BookButtonLarge from "../components/BookButtonLarge";
import { BookingContext } from "../context/BookingContext";

export default function Home() {
  const bookingContext = useContext(BookingContext);
  useEffect(() => {
    bookingContext.resetBookingData();
  }, []);

  return (
    <div className="bg-neumorph min-h-min text-white py-8">
      <div className="flex flex-col items-center text-3xl mt-6 py-12 bg-london bg-cover bg-top">
        <p className="text-4xl">BOOK YOUR SPOT</p>
        <div className="w-56 h-px bg-white my-8" />
        <BookButtonLarge />
      </div>
      <BookingModal />
    </div>
  );
}

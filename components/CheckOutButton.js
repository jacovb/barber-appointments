import { useContext } from "react";
import { useRouter } from "next/router";
import { BookingContext } from "../context/BookingContext";

export default function CheckOutButton() {
  const bookingContext = useContext(BookingContext);
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => {
          bookingContext.createBooking();
          router.push("/");
        }}
        className="w-450 py-2 m-4 bg-neumorph shadow-neumorph rounded-lg border border-white border-opacity-0 transition duration-200 hover:border-opacity-100 hover:bg-red-700"
      >
        Checkout
      </button>
    </div>
  );
}

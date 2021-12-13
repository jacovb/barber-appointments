import { useContext } from "react";
import { useRouter } from "next/router";
import { BookingContext } from "../context/BookingContext";

export default function ReviewButton() {
  const bookingContext = useContext(BookingContext);
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => {
          bookingContext.setBookingSideBarOpen(false);
          router.push("/booking");
        }}
        className="w-450 py-2 m-4 bg-neumorph shadow-neumorph rounded-lg border border-red-700 border-opacity-0 hover:border-opacity-100 hover:text-red-500"
      >
        Review and Payment
      </button>
    </div>
  );
}

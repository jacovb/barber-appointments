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
          if (
            bookingContext.bookingData.date &&
            bookingContext.bookingData.time &&
            bookingContext.bookingData.stripeApi &&
            bookingContext.bookingData.bookingUserId
          ) {
            bookingContext.setEditModalOpen(false);
            router.push("/booking");
          }
        }}
        className="w-450 py-2 m-4 bg-neumorph shadow-neumorph rounded-lg border border-white border-opacity-0 transition duration-200 hover:border-opacity-100 hover:bg-red-700"
      >
        Review and Payment
      </button>
    </div>
  );
}

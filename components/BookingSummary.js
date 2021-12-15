import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import BookingSideBar from "./BookingSideBar";
import { PencilAltIcon } from "@heroicons/react/outline";

export default function BookingSummary() {
  const bookingContext = useContext(BookingContext);
  let treatment = bookingContext.treatments.filter(
    (treatment) =>
      treatment.id === bookingContext.bookingData.bookingTreatmentId
  )[0];

  return (
    <>
      <div className="relative w-450 h-fit bg-neumorph shadow-neumorph text-white p-4 m-4 rounded-lg">
        <p>Treatment: {treatment.title}</p>
        <p>Date: {bookingContext.bookingData.date}</p>
        <p>Time: {bookingContext.bookingData.time}</p>
        <p>Price: £{treatment.price}</p>
        <button
          onClick={() => bookingContext.setBookingSideBarOpen(true)}
          className="h-5 w-5 absolute top-4 right-4"
        >
          <PencilAltIcon />
        </button>
      </div>
      <BookingSideBar />
    </>
  );
}
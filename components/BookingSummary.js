import React, { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import BookingEditModal from "./BookingEditModal";
import Block from "./checkout/Block";
import { PencilAltIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

export default function BookingSummary() {
  const bookingContext = useContext(BookingContext);
  const router = useRouter();
  let treatment = bookingContext.treatments.filter(
    (treatment) =>
      treatment.id === bookingContext.bookingData.bookingTreatmentId
  )[0];

  if (!treatment) {
    router.push("/");
  }

  console.log("BC @ BookingSummary", bookingContext.bookingData);

  return (
    <>
      <Block>
        <div className="grid grid-cols-2 text-lg">
          <p className="mx-4 my-1 text-gray-400 justify-self-end">Treatment:</p>
          <p className="mx-4 my-1">{treatment.title}</p>
          <p className="mx-4 my-1 text-gray-400 justify-self-end">Date:</p>
          <p className="mx-4 my-1">{bookingContext.bookingData.date}</p>
          <p className="mx-4 my-1 text-gray-400 justify-self-end">Time:</p>
          <p className="mx-4 my-1">{bookingContext.bookingData.time}</p>
          <p className="mx-4 my-1 text-gray-400 justify-self-end">Price:</p>
          <p className="mx-4 my-1">£{treatment.price}</p>
        </div>
        <button
          onClick={() => bookingContext.setEditModalOpen(true)}
          className="outline-none h-5 w-5 absolute top-5 right-5 hover:text-red-500 transition duration-200"
        >
          <PencilAltIcon />
        </button>
      </Block>
      <BookingEditModal />
    </>
  );
}

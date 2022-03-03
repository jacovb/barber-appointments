import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import TreatmentPicker from "./TreatmentPicker";
import DatePicker from "./DatePicker";
import Timeslots from "./Timeslots";
import ReviewButton from "./ReviewButton";

export default function BookingModal() {
  const bookingContext = useContext(BookingContext);

  return (
    <>
      <Transition appear show={bookingContext.bookingModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={bookingContext.setBookingModalOpen}
        >
          <div className="min-h-screen px-4 text-center bg-gray-600 bg-opacity-75">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-neumorph shadow-float shadow-black rounded-xl text-white">
                <Dialog.Title
                  as="h3"
                  className="flex justify-center text-2xl font-medium leading-6"
                >
                  Book an Appointment
                </Dialog.Title>
                <div className="mt-2">
                  <TreatmentPicker />
                  <DatePicker />
                  <Timeslots />
                  <ReviewButton />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

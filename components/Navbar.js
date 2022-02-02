import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import { BookingContext } from "../context/BookingContext";
import BarberNameSmall from "./BarberNameSmall";

export default function Navbar() {
  const authContext = useContext(AuthContext);
  const bookingContext = useContext(BookingContext);

  const handleLogOut = async () => {
    try {
      await authContext.signOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="py-6 px-12 text-white bg-neumorph flex flex-row justify-between items-start h-40">
      <button
        className="shadow-neumorph py-3 px-6 h-14 rounded-lg border border-red-700 border-opacity-0 hover:border-opacity-100 hover:text-red-500"
        onClick={() => {
          bookingContext.setBookingModalOpen(true);
          // bookingContext.setBookingData(bookingContext.startBookingForm);
        }}
      >
        Book Now
      </button>

      <Link href="/">
        <a className="cursor-pointer text-white hover:text-red-500">
          <BarberNameSmall />
        </a>
      </Link>

      <button
        className="bg-brass shadow-neumorph py-3 px-6 h-14 rounded-lg border border-red-700 border-opacity-0 hover:border-opacity-100 hover:font-medium"
        onClick={handleLogOut}
      >
        Sign Out
      </button>
    </nav>
  );
}

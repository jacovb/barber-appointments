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
      <Link href="/prices">
        <a className="shadow-neumorph py-3 px-6 flex items-center h-14 rounded-lg border border-white border-opacity-0 transition duration-200 hover:border-opacity-100 hover:bg-red-700">
          Prices
        </a>
      </Link>

      <Link href="/">
        <a
          className="cursor-pointer text-white hover:text-red-500 transition duration-200"
          onClick={() => {
            bookingContext.setBookingModalOpen(false);
          }}
        >
          <BarberNameSmall />
        </a>
      </Link>

      <button
        className="bg-brass shadow-neumorph py-3 px-6 h-14 rounded-lg border border-white border-opacity-0 transition duration-200 hover:border-opacity-100 hover:font-medium hover:bg-red-700"
        onClick={handleLogOut}
      >
        Sign Out
      </button>
    </nav>
  );
}

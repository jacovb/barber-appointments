import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import { BookingContext } from "../context/BookingContext";
import { HomeIcon } from "@heroicons/react/outline";

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
    <nav className="py-4 px-12 text-white bg-neumorph flex flex-row justify-between">
      <div className="flex flex-row">
        <Link href="/">
          <a className="shadow-neumorph p-3 rounded-lg border border-red-700 border-opacity-0 hover:border-opacity-100 hover:text-red-500">
            <div className="h-7 w-7">
              <HomeIcon />
            </div>
          </a>
        </Link>
      </div>
      <button
        className="shadow-neumorph py-3 px-6 rounded-lg border border-red-700 border-opacity-0 hover:border-opacity-100 hover:text-red-500"
        onClick={() => {
          bookingContext.setBookingSideBarOpen(true);
          // bookingContext.setBookingData(bookingContext.startBookingForm);
        }}
      >
        Book Now
      </button>
      <p className="text-xl flex justify-center">
        {`Welcome, ${authContext.currentUserDetails.name} ${authContext.currentUserDetails.surname}`}
      </p>
      <button
        className="bg-brass shadow-neumorph py-3 px-6 rounded-lg border border-red-700 border-opacity-0 hover:border-opacity-100 hover:font-medium"
        onClick={handleLogOut}
      >
        Sign Out
      </button>
    </nav>
  );
}

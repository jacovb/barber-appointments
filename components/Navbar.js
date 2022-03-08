import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import { BookingContext } from "../context/BookingContext";
import { LogoutIcon } from "@heroicons/react/outline";
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
    <>
      <nav className="text-white bg-nav flex flex-row justify-between items-center h-12">
        <div className="flex items-center pl-6 divide-x divide-gray-700">
          <Link href="/prices">
            <a className="px-4 text-gray-400 hover:text-red-500 hover:font-medium transition duration-200">
              Prices
            </a>
          </Link>
          <Link href="/contact">
            <a className="px-4 text-gray-400 hover:text-red-500 hover:font-medium transition duration-200">
              Contact
            </a>
          </Link>
        </div>

        <div className="flex items-center pr-6 divide-x divide-gray-700">
          <p className="px-4 text-gray-400">
            {`${authContext.currentUserDetails.name} ${authContext.currentUserDetails.surname}`}
          </p>

          <button className="px-4" onClick={handleLogOut}>
            <LogoutIcon className="w-6 h-8 text-gray-400 hover:text-red-500 hover:font-medium transition duration-200" />
          </button>
        </div>
      </nav>
      <div className="flex justify-center bg-neumorph">
        <Link href="/">
          <a
            className="pt-4 cursor-pointer text-white hover:text-red-500 transition duration-200"
            onClick={() => {
              bookingContext.setBookingModalOpen(false);
            }}
          >
            <BarberNameSmall />
          </a>
        </Link>
      </div>
    </>
  );
}

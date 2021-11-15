import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const authContext = useContext(AuthContext);

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
          <a className="shadow-neumorph py-3 px-6 rounded-lg border border-red-700 border-opacity-0 hover:border-opacity-100 hover:text-red-500">
            Home
          </a>
        </Link>
        <Link href="/booking">
          <a className="ml-5 shadow-neumorph py-3 px-6 rounded-lg border border-red-700 border-opacity-0 hover:border-opacity-100 hover:text-red-500">
            Book Appointment
          </a>
        </Link>
        <Link href="/payment">
          <a className="ml-5 shadow-neumorph py-3 px-6 rounded-lg border border-red-700 border-opacity-0 hover:border-opacity-100 hover:text-red-500">
            Payment
          </a>
        </Link>
      </div>
      <button
        className="bg-brass shadow-neumorph py-3 px-6 rounded-lg border border-red-700 border-opacity-0 hover:border-opacity-100 hover:font-medium"
        onClick={handleLogOut}
      >
        Sign Out
      </button>
    </nav>
  );
}

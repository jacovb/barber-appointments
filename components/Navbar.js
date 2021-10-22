import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-4 px-12 border-b border-gray-300">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/book">
        <a className="ml-4">Book Appointment</a>
      </Link>
      <Link href="/payment">
        <a className="ml-4">Payment</a>
      </Link>
    </nav>
  );
}

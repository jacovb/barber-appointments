import React from "react";
import Link from "next/link";
import { Auth } from "aws-amplify";

export default function Navbar() {
  return (
    <nav className="py-4 px-12 border-b border-gray-300">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/booking">
        <a className="ml-4">Book Appointment</a>
      </Link>
      <Link href="/payment">
        <a className="ml-4">Payment</a>
      </Link>
      <button onClick={() => Auth.signOut()}>Sign Out</button>
    </nav>
  );
}

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import BookingSummary from "../components/BookingSummary";

export default function Booking() {
  const authContext = useContext(AuthContext);

  return (
    <div className="bg-neumorph min-h-screen flex flex-col items-center">
      <p className="text-2xl text-white my-3">
        {authContext.currentUserDetails.name || authContext.userInfo.email} -
        Booking Overview
      </p>
      <BookingSummary />
    </div>
  );
}

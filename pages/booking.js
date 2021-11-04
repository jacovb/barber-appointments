import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Booking() {
  const authContext = useContext(AuthContext);

  return (
    <div>
      <p className="text-xl">Welcome, {authContext.userInfo.email}</p>
      <p>This is where you will book an appointment</p>
    </div>
  );
}

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DatePicker from "../components/DatePicker";
import Timeslots from "../components/Timeslots";

export default function Home() {
  const authContext = useContext(AuthContext);

  return (
    <div className="bg-neumorph min-h-screen text-white pb-8">
      <p className="text-xl flex justify-center">
        Welcome,{" "}
        {authContext.currentUserDetails.name || authContext.userInfo.email}
      </p>
      <DatePicker />
      <Timeslots />
      {console.log(authContext.userInfo)}
      {console.log(authContext.currentUserDetails)}
      {console.log(authContext.isSignedIn)}
    </div>
  );
}

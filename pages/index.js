import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import BookingSideBar from "../components/BookingSideBar";
import BarberName from "../components/BarberName";

export default function Home() {
  const authContext = useContext(AuthContext);

  return (
    <div className="bg-neumorph min-h-screen text-white pb-8">
      {console.log(authContext.userInfo)}
      <BarberName />
      <p className="text-xl flex justify-center">
        Welcome,{" "}
        {authContext.currentUserDetails.name || authContext.userInfo.email}
      </p>
      <BookingSideBar />
    </div>
  );
}

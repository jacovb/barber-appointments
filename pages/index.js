import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DatePicker from "../components/DatePicker";

export default function Home() {
  const authContext = useContext(AuthContext);

  return (
    <div className="bg-neumorph min-h-screen text-white">
      <p className="text-xl flex justify-center">
        Welcome,{" "}
        {authContext.currentUserDetails.name || authContext.userInfo.email}
      </p>
      <DatePicker />
      {console.log(authContext.userInfo)}
      {console.log(authContext.currentUserDetails)}
      {console.log(authContext.isSignedIn)}
    </div>
  );
}

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const authContext = useContext(AuthContext);

  return (
    <div className="bg-neumorph min-h-screen text-white">
      <p className="text-xl">Welcome, {authContext.userInfo.email}</p>
      {console.log(authContext.userInfo)}
      {console.log(authContext.currentUserDetails)}
      {console.log(authContext.isSignedIn)}
    </div>
  );
}

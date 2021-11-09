import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const authContext = useContext(AuthContext);

  return (
    <>
      <p className="text-xl">Welcome, {authContext.userInfo.email}</p>
      <button
        className="text-white w-full mt-10 bg-pink-600 p-3 rounded"
        onClick={() => {
          authContext.signOut();
        }}
      >
        Sign Out
      </button>
    </>
  );
}

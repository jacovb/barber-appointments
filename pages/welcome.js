import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Auth } from "aws-amplify";

export default function Welcome() {
  const authContext = useContext(AuthContext);

  return (
    <div>
      <p className="text-xl">Welcome, {authContext.userInfo.email}</p>
      <button
        className="text-white w-full mt-10 bg-pink-600 p-3 rounded"
        onClick={() => {
          Auth.signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

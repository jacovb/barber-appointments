import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Welcome() {
  const authContext = useContext(AuthContext);

  return (
    <div>
      <p className="text-xl">
        Welcome, {authContext.userInfo.attributes.email}
      </p>
      <button
        className="text-white w-full mt-10 bg-pink-600 p-3 rounded"
        onClick={() => {
          Auth.signOut();
          setUiState("signIn");
          setUser(null);
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

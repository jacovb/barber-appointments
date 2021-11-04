import { useState } from "react";
import "../src/configureAmplify";
import SignIn from "./SignIn";
import SignUp from "./signUp";

export default function AuthPage() {
  const [authState, setAuthState] = useState("signIn");

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">
            {authState === "signIn" && <SignIn setAuthState={setAuthState} />}
            {authState === "signUp" && <SignUp setAuthState={setAuthState} />}
          </div>
        </div>
      </div>
    </div>
  );
}

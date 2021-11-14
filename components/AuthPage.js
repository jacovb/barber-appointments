import { useState } from "react";
import "../src/configureAmplify";
import SignIn from "./SignIn";
import SignUp from "./signUp";
import VerifySignUp from "./VerifySignUp";
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordSubmit from "./ForgotPasswordSubmit";

export default function AuthPage() {
  const [authState, setAuthState] = useState("signIn");
  const [tempEmail, setTempEmail] = useState("");

  return (
    <div className="bg-neumorph min-h-screen">
      <div className="flex flex-col items-center">
        <div className="max-w-full sm:w-540 mt-14 mb-14">
          <div className="bg-neumorph py-10 px-12 shadow-neumorph rounded-2xl">
            {authState === "signIn" && <SignIn setAuthState={setAuthState} />}
            {authState === "signUp" && (
              <SignUp setAuthState={setAuthState} setTempEmail={setTempEmail} />
            )}
            {authState === "verifySignUp" && (
              <VerifySignUp
                setAuthState={setAuthState}
                tempEmail={tempEmail}
                setTempEmail={setTempEmail}
              />
            )}
            {authState === "forgotPassword" && (
              <ForgotPassword
                setAuthState={setAuthState}
                setTempEmail={setTempEmail}
              />
            )}
            {authState === "forgotPasswordSubmit" && (
              <ForgotPasswordSubmit
                setAuthState={setAuthState}
                tempEmail={tempEmail}
                setTempEmail={setTempEmail}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

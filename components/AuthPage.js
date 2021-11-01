import { useState, useEffect, useContext } from "react";
import { Auth } from "aws-amplify";
import "../src/configureAmplify";
import SignIn from "./SignIn";
import { AuthContext } from "../context/AuthContext";

const initialState = { email: "", password: "", authCode: "" };

export default function AuthPage() {
  const [uiState, setUiState] = useState(null);
  const [formState, setFormState] = useState(initialState);
  const [user, setUser] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    checkUser();
    async function checkUser() {
      try {
        const user = await authContext.getCurrentUser();
        console.log(user);
        setUser(user);
        setUiState("signedIn");
      } catch (err) {
        setUser(null);
        setUiState("signIn");
      }
    }
  }, []);

  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">
            {uiState === "signIn" && (
              <SignIn onChange={onChange} setUiState={setUiState} />
            )}
            {uiState === "signedIn" && (
              <div>
                <p className="text-xl">Welcome, {user.attributes.email}</p>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

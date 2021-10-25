import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import "../src/configureAmplify";

const initialState = { email: "", password: "", authCode: "" };

export default function AuthPage() {
  const [uiState, setUiState] = useState(null);
  const [formState, setFormState] = useState(initialState);

  useEffect(() => {
    checkUser();
    async function checkUser() {
      const user = await Auth.currentAuthenticatedUser();
      console.log({ user });
    }
  }, []);

  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>
        Sign in with Google
      </button>
      <button onClick={() => Auth.signOut()}>Sign Out</button>
    </div>
  );
}

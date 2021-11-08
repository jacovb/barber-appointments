import { Auth } from "aws-amplify";
import SocialSignIn from "./SocialSignIn";
import Input from "./Input";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SignIn({ setAuthState }) {
  const authContext = useContext(AuthContext);
  const [formState, setFormState] = useState(null);

  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <div>
      {console.log(formState)}
      <p className="text-3xl font-black">Sign in to your account</p>
      <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" />
      </div>
      <div className="mt-4">
        <label className="text-sm">
          Password
          <span
            onClick={() => setAuthState("forgotPassword")}
            role="button"
            className="text-sm ml-8 sm:ml-56 text-pink-600 cursor-pointer"
          >
            Forgot Password?
          </span>
        </label>
        <Input onChange={onChange} name="email" type="password" />
      </div>
      <button
        onClick={() => authContext.signIn(formState.email, formState.password)}
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      >
        Sign In
      </button>
      <SocialSignIn />
      <p className="mt-12 text-sm font-light">
        Don't have an account?
        <span
          onClick={() => setAuthState("signUp")}
          role="button"
          className="cursor-pointer text-pink-600 ml-2"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}

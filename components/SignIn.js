import SocialSignIn from "./SocialSignIn";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import Input from "./Input";

export default function SignIn({ setAuthState }) {
  const authContext = useContext(AuthContext);
  const [formState, setFormState] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await authContext.signIn(data.email, data.password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p className="text-3xl font-black">Sign in to your account</p>
      <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
        <div className="mt-10">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            className="outline-none border-gray-300 border rounded p-2 mt-3 w-full focus:shadow-inputfocus focus:border-white"
            id="name"
            autoComplete="off"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="text-sm">
            Password
            <span
              onClick={() => setAuthState("forgotPassword")}
              role="button"
              className="text-sm ml-8 sm:ml-56 text-pink-600 cursor-pointer"
            >
              Forgot Password?
            </span>
          </label>
          <input
            {...register("password", { required: true })}
            className="outline-none border-gray-300 border rounded p-2 mt-3 w-full focus:shadow-inputfocus focus:border-white"
            id="password"
            autoComplete="off"
            type="password"
          />
        </div>
        <input
          type="submit"
          value="Sign In"
          className="text-white w-full mt-6 bg-pink-600 p-3 rounded cursor-pointer"
        />
      </form>

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

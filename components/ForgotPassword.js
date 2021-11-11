import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

export default function ForgotPassword({ setAuthState, setTempEmail }) {
  const authContext = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await authContext.forgotPassword(data.email);
      setAuthState("forgotPasswordSubmit");
      setTempEmail(data.email);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p className="text-3xl font-black">Reset Password</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10">
          <label htmlFor="email" className="text-sm">
            Email:
          </label>
          <input
            {...register("email", { required: true })}
            className="outline-none border-gray-300 border rounded p-2 mt-3 w-full focus:shadow-inputfocus focus:border-white"
            id="name"
            autoComplete="off"
          />
        </div>

        <input
          type="submit"
          value="Reset"
          className="text-white w-full mt-6 bg-pink-600 p-3 rounded cursor-pointer"
        />
        <p className="mt-8 text-sm font-light">
          Remembered your Password?
          <span
            className="cursor-pointer text-pink-600 ml-2"
            onClick={() => setAuthState("signIn")}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}
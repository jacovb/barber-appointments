import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

export default function VerifySignUp({
  setAuthState,
  setTempEmail,
  tempEmail,
}) {
  const authContext = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await authContext.verifySignUp(tempEmail, data.verificationCode);
      setAuthState("signIn");
      setTempEmail("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p className="text-3xl font-black">Verify your Account</p>
      <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
        <div className="mt-10">
          <label htmlFor="verificationCode" className="text-sm">
            Verification Code:
          </label>
          <input
            {...register("verificationCode", { required: true })}
            className="outline-none border-gray-300 border rounded p-2 mt-3 w-full focus:shadow-inputfocus focus:border-white"
            id="surname"
            autoComplete="off"
          />
        </div>

        <input
          type="submit"
          value="Verify"
          className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
        />
        <p className="mt-8 text-sm font-light">
          Already Signed Up?
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

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
      <p className="text-3xl text-white font-black">Verify your Account</p>
      <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
        <div className="mt-10">
          <label htmlFor="verificationCode" className="text-sm text-white">
            Verification Code:
          </label>
          <input
            {...register("verificationCode", { required: true })}
            className="shadow-neumorphInset bg-neumorph outline-none rounded-md p-2 mt-3 w-full focus:ring-1 focus:ring-red-700 text-white"
            id="surname"
            autoComplete="off"
          />
        </div>

        <input
          type="submit"
          value="Verify"
          className="shadow-neumorph text-xl font-medium text-white w-full mt-8 bg-brass p-3 rounded-md cursor-pointer"
        />
        <p className="mt-8 text-sm text-white font-light">
          Already Signed Up?
          <span
            className="cursor-pointer text-red-500 ml-2"
            onClick={() => setAuthState("signIn")}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}

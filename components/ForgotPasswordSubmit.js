import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

export default function ForgotPasswordSubmit({
  setAuthState,
  setTempEmail,
  tempEmail,
}) {
  const authContext = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await authContext.forgotPasswordSubmit(
        tempEmail,
        data.code,
        data.newPassword
      );
      setAuthState("signIn");
      setTempEmail("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p className="text-3xl text-white font-black">Enter New Password</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10">
          <label htmlFor="code" className="text-sm text-white">
            Verification Code sent to your Email:
          </label>
          <input
            {...register("code", { required: true })}
            className="shadow-neumorphInset bg-neumorph outline-none rounded-md p-2 mt-3 w-full focus:ring-1 focus:ring-red-700 text-white"
            id="name"
            autoComplete="off"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="newPassword" className="text-sm text-white">
            New Password:
          </label>
          <input
            {...register("newPassword", { required: true })}
            className="shadow-neumorphInset bg-neumorph outline-none rounded-md p-2 mt-3 w-full focus:ring-1 focus:ring-red-700 text-white"
            id="name"
            autoComplete="off"
            type="password"
          />
        </div>

        <input
          type="submit"
          value="Enter"
          className="shadow-neumorph text-xl font-medium text-white w-full mt-8 bg-brass p-3 rounded-md cursor-pointer"
        />
        <p className="mt-8 text-sm text-white font-light">
          Remembered your Password?
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

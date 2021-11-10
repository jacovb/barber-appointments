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
      <p className="text-3xl font-black">Enter New Password</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10">
          <label htmlFor="code" className="text-sm">
            Verification Code sent to your Email:
          </label>
          <input
            {...register("code", { required: true })}
            className="outline-none border-gray-300 border rounded p-2 mt-3 w-full focus:shadow-inputfocus focus:border-white"
            id="name"
            autoComplete="off"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="newPassword" className="text-sm">
            New Password:
          </label>
          <input
            {...register("newPassword", { required: true })}
            className="outline-none border-gray-300 border rounded p-2 mt-3 w-full focus:shadow-inputfocus focus:border-white"
            id="name"
            autoComplete="off"
            type="password"
          />
        </div>

        <input
          type="submit"
          value="Enter"
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

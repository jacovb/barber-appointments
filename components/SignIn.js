import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

export default function SignIn({ setAuthState }) {
  const authContext = useContext(AuthContext);
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
      <p className="text-3xl font-black text-white">
        Sign in to Book Appointment
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
        <div className="mt-10">
          <label htmlFor="email" className="text-sm text-white">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            className="shadow-neumorphInset bg-neumorph outline-none rounded-md p-2 mt-3 w-full focus:ring-1 focus:ring-red-700 text-white"
            id="name"
            autoComplete="off"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="text-sm text-white">
            Password
            <span
              onClick={() => setAuthState("forgotPassword")}
              role="button"
              className="text-sm ml-8 sm:ml-60 text-red-500 cursor-pointer"
            >
              Forgot Password?
            </span>
          </label>
          <input
            {...register("password", { required: true })}
            className="shadow-neumorphInset bg-neumorph outline-none border-none rounded-md p-2 mt-3 w-full focus:ring-1 focus:ring-red-700 text-white"
            id="password"
            autoComplete="off"
            type="password"
          />
        </div>
        <input
          type="submit"
          value="Sign In"
          className="shadow-neumorph text-xl font-medium text-white w-full mt-8 bg-brass p-3 rounded-md cursor-pointer"
        />
      </form>

      <p className="mt-6 text-sm font-light text-white">
        Don't have an account?
        <span
          onClick={() => setAuthState("signUp")}
          role="button"
          className="cursor-pointer text-red-500 text-sm ml-2"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}

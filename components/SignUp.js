import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

export default function SignUp({ setAuthState, setTempEmail }) {
  const authContext = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await authContext.signUp(
        data.email,
        data.password,
        data.name,
        data.surname,
        data.gender
      );
      setAuthState("verifySignUp");
      setTempEmail(data.email);
    } catch (err) {
      setErrorMessage(err.message);
    }
    console.log(data);
  };

  return (
    <div>
      <p className="text-3xl text-white font-black">Sign up for an Account</p>
      <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
        <div className="mt-6">
          <label htmlFor="name" className="text-sm text-white">
            Name:
          </label>
          <input
            {...register("name", { required: true })}
            className="shadow-neumorphInset bg-neumorph outline-none rounded-md p-2 mt-3 w-full focus:ring-1 focus:ring-red-700 text-white"
            id="name"
            autoComplete="off"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="surname" className="text-sm text-white">
            Surname:
          </label>
          <input
            {...register("surname", { required: true })}
            className="shadow-neumorphInset bg-neumorph outline-none rounded-md p-2 mt-3 w-full focus:ring-1 focus:ring-red-700 text-white"
            id="surname"
            autoComplete="off"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="gender" className="text-sm w-full text-white">
            Gender:
          </label>

          <div className="flex flex-row justify-between items-center text-align p-2 mt-3">
            <div>
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="Male"
                id="male"
                className="shadow-neumorph bg-neumorph form-radio text-white focus:ring-1 focus:ring-red-700 text-red-700 h-8 w-8"
              />
              <label htmlFor="male" className="text-sm ml-2 text-white">
                Male
              </label>
            </div>

            <div>
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="Female"
                id="female"
                className="shadow-neumorph bg-neumorph form-radio text-white focus:ring-1 focus:ring-red-700 text-red-700 h-8 w-8"
              />
              <label htmlFor="female" className="text-sm ml-2 text-white">
                Female
              </label>
            </div>

            <div>
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="Other"
                id="other"
                className="shadow-neumorph bg-neumorph form-radio text-white focus:ring-1 focus:ring-red-700 text-red-700 h-8 w-8"
              />
              <label htmlFor="other" className="text-sm ml-2 text-white">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="text-sm text-white">
            Email:
          </label>
          <input
            {...register("email", { required: true })}
            className="shadow-neumorphInset bg-neumorph outline-none rounded-md p-2 mt-3 w-full focus:ring-1 focus:ring-red-700 text-white"
            id="email"
            autoComplete="off"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="text-sm text-white">
            Password:
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
          value="Sign Up"
          className="shadow-neumorph text-xl font-medium text-white w-full mt-8 bg-brass p-3 rounded-md cursor-pointer"
        />
        <p className="mt-8 text-sm font-light text-white">
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

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
      <p className="text-3xl font-black">Sign up for an Account</p>
      <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
        <div className="mt-6">
          <label htmlFor="name" className="text-sm">
            Name:
          </label>
          <input
            {...register("name", { required: true })}
            className="outline-none border-gray-300 border rounded p-2 mt-3 w-full focus:shadow-inputfocus focus:border-white"
            id="name"
            autoComplete="off"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="surname" className="text-sm">
            Surname:
          </label>
          <input
            {...register("surname", { required: true })}
            className="outline-none border-gray-300 border rounded p-2 mt-3 w-full focus:shadow-inputfocus focus:border-white"
            id="surname"
            autoComplete="off"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="gender" className="text-sm w-full">
            Gender:
          </label>

          <div className="flex flex-row justify-around items-center text-align p-2 mt-3 border-gray-300 border rounded">
            <div>
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="Male"
                id="male"
                className="form-radio border-gray-300 h-5 w-5"
              />
              <label htmlFor="male" className="text-sm ml-2">
                Male
              </label>
            </div>

            <div>
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="Female"
                id="female"
                className="form-radio h-5 w-5"
              />
              <label htmlFor="female" className="text-sm ml-2">
                Female
              </label>
            </div>

            <div>
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="Other"
                id="other"
                className="form-radio h-5 w-5"
              />
              <label htmlFor="other" className="text-sm ml-2">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="text-sm">
            Email:
          </label>
          <input
            {...register("email", { required: true })}
            className="outline-none border-gray-300 border rounded p-2 mt-3 w-full focus:shadow-inputfocus focus:border-white"
            id="email"
            autoComplete="off"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="text-sm">
            Password:
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
          value="Sign Up"
          className="text-white w-full mt-6 bg-pink-600 p-3 rounded cursor-pointer"
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

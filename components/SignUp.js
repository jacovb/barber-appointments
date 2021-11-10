import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

export default function SignUp({ setAuthState, setTempEmail }) {
  const authContext = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // if (data.password !== data.confirmPassword) {
    //   setErrorMessage("Passwords do not match");
    // } else {
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
    // }
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
          <label htmlFor="gender" className="text-sm">
            Gender:
          </label>

          <input
            {...register("gender", { required: true })}
            type="radio"
            value="Male"
          />
          <input
            {...register("gender", { required: true })}
            type="radio"
            value="Female"
          />
          <input
            {...register("gender", { required: true })}
            type="radio"
            value="Other"
          />

          {/* <select
            {...register("gender", { required: true })}
            className="outline-none border-gray-300 border rounded p-2 mt-3 w-full focus:shadow-inputfocus focus:border-white"
            id="gender"
          >
            <option value="" disabled hidden>
              -- Select Gender --
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select> */}
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

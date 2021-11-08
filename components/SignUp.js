import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

export default function SignUp({ setAuthState }) {
  const authContext = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      try {
        await authContext.signUp(
          data.email,
          data.password,
          data.name,
          data.surname,
          data.gender,
          data.phoneNumber
        );
        setAuthState("verifySignUp");
      } catch (err) {
        setErrorMessage(err.message);
      }
    }
  };

  return (
    <div>
      <p className="text-3xl font-black">Sign up for an Account</p>
      <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
        <div className="mt-10">
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
        <select
          {...register("gender", { required: true })}
          className="text-sm"
          id="gender"
        >
          <option value="" disabled hidden>
            -- Select Gender --
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <div>
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
        <div>
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
        <div>
          <label htmlFor="confirmPassword" className="text-sm">
            Confirm Password:
          </label>
          <input
            {...register("confirmPassword", { required: true })}
            className="outline-none border-gray-300 border rounded p-2 mt-3 w-full focus:shadow-inputfocus focus:border-white"
            id="confirmPassword"
            autoComplete="off"
            type="password"
          />
        </div>

        <input
          type="submit"
          value="Sign Up"
          className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
        />
        <p>
          Already Signed Up?
          <span
            className="cursor-pointer"
            onClick={() => setAuthState("signIn")}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
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
      } catch (err) {
        setErrorMessage(err.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
        <label htmlFor="name" className="signin-label">
          Name:
        </label>
        <input
          {...register("name", { required: true })}
          className="signin-input"
          id="name"
          autoComplete="off"
        />
        <label htmlFor="surname" className="signin-label">
          Surname:
        </label>
        <input
          {...register("surname", { required: true })}
          className="signin-input"
          id="surname"
          autoComplete="off"
        />
        <select
          {...register("gender", { required: true })}
          className="signin-option"
          id="gender"
        >
          <option value="" disabled hidden>
            -- Select Gender --
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="email" className="signin-label">
          Email:
        </label>
        <input
          {...register("email", { required: true })}
          className="signin-input"
          id="email"
          autoComplete="off"
        />
        <label htmlFor="password" className="signin-label">
          Password:
        </label>
        <input
          {...register("password", { required: true })}
          className="signin-input"
          id="password"
          autoComplete="off"
          type="password"
        />
        <label htmlFor="confirmPassword" className="signin-label">
          Confirm Password:
        </label>
        <input
          {...register("confirmPassword", { required: true })}
          className="signin-input"
          id="confirmPassword"
          autoComplete="off"
          type="password"
        />
        <input type="submit" value="Sign Up" className="signin-button" />
        {/* Add useRouter to get to confirmation Code */}
      </form>
    </>
  );
}

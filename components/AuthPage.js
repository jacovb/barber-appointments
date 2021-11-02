import "../src/configureAmplify";
import SignIn from "./SignIn";

export default function AuthPage() {
  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <>
      <SignIn onChange={onChange} />
    </>
  );
}

import { Auth } from "aws-amplify";
import SocialSignIn from "./SocialSignIn";

export default function SignIn() {
  return (
    <div>
      <p className="text-3xl font-black">Sign in to your account</p>
      <SocialSignIn />
    </div>
  );
}

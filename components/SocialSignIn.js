import { Auth } from "aws-amplify";
import { FaGoogle } from "react-icons/fa";

export default function SocialSignIn() {
  return (
    <div className="flex flex-col">
      <button
        className="mt-10 focus:outline-none"
        onClick={() => Auth.federatedSignIn({ provider: "Google" })}
      >
        <div className="shadow-neumorph bg-neumorph flex p-2 rounded-full items-center justify-center">
          <FaGoogle size="38" className="text-red-600" />
          <p className="ml-3 text-white">Sign in with Google</p>
        </div>
      </button>
    </div>
  );
}

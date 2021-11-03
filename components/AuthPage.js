import "../src/configureAmplify";
import SignIn from "./SignIn";

export default function AuthPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}

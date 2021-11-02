import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AuthPage from "../components/AuthPage";
import { AuthIsSignedIn, AuthIsNotSignedIn } from "../context/AuthContext";
import Welcome from "./welcome";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">
            <AuthIsNotSignedIn>
              <AuthPage />
            </AuthIsNotSignedIn>
            <AuthIsSignedIn>
              <Navbar />
              <Welcome />
            </AuthIsSignedIn>
          </div>
        </div>
      </div>
    </div>
  );
}

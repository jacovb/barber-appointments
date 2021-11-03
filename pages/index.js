import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AuthPage from "../components/AuthPage";
import AuthProvider, {
  AuthIsSignedIn,
  AuthIsNotSignedIn,
} from "../context/AuthContext";
import Welcome from "./welcome";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <AuthProvider>
        <AuthIsNotSignedIn>
          <AuthPage />
        </AuthIsNotSignedIn>
        <AuthIsSignedIn>
          <Navbar />
          <Welcome />
        </AuthIsSignedIn>
      </AuthProvider>
    </>
  );
}

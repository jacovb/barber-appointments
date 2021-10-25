import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AuthPage from "../components/AuthPage";

export default function Home() {
  return (
    <div>
      <AuthPage />
    </div>
  );
}

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import AuthProvider, {
  AuthIsSignedIn,
  AuthIsNotSignedIn,
} from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthProvider>
        <AuthIsSignedIn></AuthIsSignedIn>
        <AuthIsNotSignedIn>
          <Navbar />
          <Component {...pageProps} />
        </AuthIsNotSignedIn>
      </AuthProvider>
    </div>
  );
}

export default MyApp;

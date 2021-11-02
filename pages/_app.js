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
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
}

export default MyApp;

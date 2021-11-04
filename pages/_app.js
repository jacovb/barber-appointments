import "../styles/globals.css";
import Navbar from "../components/Navbar";
import AuthPage from "../components/AuthPage";
import AuthProvider, {
  AuthIsSignedIn,
  AuthIsNotSignedIn,
} from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthProvider>
        <AuthIsNotSignedIn>
          <AuthPage />
        </AuthIsNotSignedIn>
        <AuthIsSignedIn>
          <Navbar />
          <Component {...pageProps} />
        </AuthIsSignedIn>
      </AuthProvider>
    </div>
  );
}

export default MyApp;

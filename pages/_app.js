import "../styles/globals.css";
import "../styles/Calendar.css";
import Navbar from "../components/Navbar";
import AuthPage from "../components/AuthPage";
import AuthProvider, {
  AuthIsSignedIn,
  AuthIsNotSignedIn,
} from "../context/AuthContext";
import BookingContextProvider from "../context/BookingContext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthProvider>
        <AuthIsNotSignedIn>
          <AuthPage />
        </AuthIsNotSignedIn>
        <AuthIsSignedIn>
          <BookingContextProvider>
            <Navbar />
            <Component {...pageProps} />
          </BookingContextProvider>
        </AuthIsSignedIn>
      </AuthProvider>
    </div>
  );
}

export default MyApp;

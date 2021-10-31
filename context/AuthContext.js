import React from "react";

import { Auth } from "aws-amplify";

const defaultState = {
  sessionInfo: {},
  userInfo: {
    email: null,
    name: null,
  },
  isSignedIn: false,
};

export const AuthContext = React.createContext(defaultState);

export const AuthIsSignedIn = ({ children }) => {
  const { isSignedIn } = React.useContext(AuthContext);
  return <>{isSignedIn ? children : null}</>;
};

export const AuthIsNotSignedIn = ({ children }) => {
  const { isSignedIn } = React.useContext(AuthContext);
  return <>{!isSignedIn ? children : null}</>;
};

const initializeInfo = {
  username: "",
};

const initializeUser = {
  name: "",
  surname: "",
  email: "",
  id: "",
  userStatus: "",
};

const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = React.useState();
  const [sessionInfo, setSessionInfo] = React.useState({});
  const [userInfo, setUserInfo] = React.useState(initializeInfo);
  const [currentUserDetails, setCurrentUserDetails] =
    React.useState(initializeUser);

  const getCurrentSession = async () => {
    try {
      const session = await Auth.currentSession();
      return session;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const getCurrentUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return user;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  React.useEffect(() => {
    async function getSessionInfo() {
      try {
        const session = await getCurrentSession();
        const user = await getCurrentUser();

        const accessToken = session.getAccessToken();
        const refreshToken = session.getRefreshToken();
        setSessionInfo({
          accessToken,
          refreshToken,
        });

        window.localStorage.setItem("accessToken", `${accessToken}`);
        window.localStorage.setItem("refreshToken", `${refreshToken}`);

        setUserInfo({
          email: user.attributes.email,
          isContributor: user.attributes["custom:type"] === "contributor",
          username: user.username,
        });

        setIsSignedIn(true);
      } catch (err) {
        setIsSignedIn(false);
      }
    }
    getSessionInfo();
  }, [isSignedIn, setIsSignedIn]);

  if (isSignedIn === null || undefined) {
    return null;
  }

  const signUp = async (email, password, name, surname, userStatus) => {
    const result = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
    });
    return result;
  };

  const state = {
    isSignedIn,
    sessionInfo,
    userInfo,
    currentUserDetails,
    signUp,
    getCurrentSession,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  authToken: "",
  setAuthToken: (value) => {},
  logout: () => {},
});

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      "useAuthContext() can only be used inside of <AuthContextProvider />, please declare it at a higher level."
    );
  }

  return useMemo(() => ({ ...authContext }), [authContext]);
};

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState("");
  const isAuthenticated = useMemo(() => Boolean(authToken), [authToken]);

  const logout = useCallback(() => {
    if (isAuthenticated) {
      setAuthToken("");
    }
  }, [isAuthenticated]);

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      authToken,
      setAuthToken,
      logout,
    }),
    [authToken, isAuthenticated, setAuthToken, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

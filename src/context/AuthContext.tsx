import {
  AuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";

interface AuthContextType {
  createNewUser: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  user: User | null;
  signInWithProvider: (provider: AuthProvider) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  updateUser: (name: string, user: User) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<null | AuthContextType>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const createNewUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name: string, user: User) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name,
    });
  };

  const signInWithProvider = (provider: AuthProvider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("dental-care-token");
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        createNewUser,
        signIn,
        user,
        signInWithProvider,
        logOut,
        updateUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

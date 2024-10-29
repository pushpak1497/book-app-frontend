import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

//AuthProvider

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //register a user
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  //login the User
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };
  //google signin
  const googleSignIn = async () => {
    return await signInWithPopup(auth, googleProvider);
  };
  //   logout user
  const logout = () => {
    return signOut(auth);
  };

  //   manage User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        const { email, displayName, photoUrl } = user;
        const userData = { email, username: displayName, photo: photoUrl };
      }
    });
    return () => unsubscribe();
  }, []);
  const value = {
    currentUser,
    loading,
    registerUser,
    loginUser,
    googleSignIn,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

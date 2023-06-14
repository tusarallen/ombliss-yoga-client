/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const profileUpdate = (name, photo, email) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      email: email,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // set and get token
      if (currentUser) {
        axios
          .post("https://om-bliss-yoga-server.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            console.log(data.data.token);
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });

    return () => {
      unsubscibe();
    };
  }, []);

  const authInfo = {
    user,
    signIn,
    signInWithGoogle,
    createUser,
    logOut,
    loading,
    profileUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

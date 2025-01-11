import React, { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import auth from "./Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext("");

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // Register User
  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Track Auth State
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoader(false);
    });

    return () => unSubscribe();
  }, []);

  // Logout User
  const logoutUser = () => {
    setLoader(true);
    return signOut(auth)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "You have signed out successfully.",
        });
        setUser(null);
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      })
      .finally(() => setLoader(false));
  };

  // Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user); // Set user in state
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  // Google Sign Out
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "success!",
          text: "You have signed out successfully.",
        });
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
        setUser(null);
        setLoader(false);
      });
  };

  // Update User Profile
  const updateUserProfile = async (updatedData, setUser) => {
    try {
      await updateProfile(auth.currentUser, updatedData);
      setUser({
        ...auth.currentUser,
        displayName: updatedData.displayName,
        photoURL: updatedData.photoURL,
      });
    } catch (error) {
      console.log("Error updating profile", error);
    }
  };

  // Context Value
  const userInfo = {
    user,
    loader,
    setUser,
    registerUser,
    loginUser,
    logoutUser,
    handleGoogleLogin,
    handleGoogleSignOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmail } from "../firebase";
function useAuth() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();
  const signInWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmail(email, password);
      setUser(userCredential.user);
      navigate("/");
      console.log("no navigate");
    } catch (error) {
      console.error(error);
    }
  };
  return { user, signInWithEmailAndPassword };
}

export default useAuth;

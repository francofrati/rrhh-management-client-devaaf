"use client";

import { auth } from "@/firebase/config";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const firebaseAuthEvent = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(user);
        setLoading(false);
      }
    });

    return () => {
      //The execution will unsuscribe the event listener
      firebaseAuthEvent();
    };
  }, []);

  return {
    user,
    loading,
  };
}

"use client";

import { auth } from "@/firebase/config";
import { getAuthorization } from "@/lib/authorization/authorization";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const firebaseAuthEvent = onAuthStateChanged(auth, (user) => {
      if (user) {
        getAuthorization(user.uid)
          .then((res) => {
            setUser({
              ...user,
              company: res.company,
              profileImg: res.profileImg,
              name: res.name,
              companyImg: res.companyImg,
            });
            setLoading(false);
          })
          .catch(() => {
            setUser(null);
            setLoading(false);
          });
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

"use client";
import React, { useContext } from "react";

import { AuthContext } from "@/contexts/authentication/authenticationProvider";

function AuthUserHomePage() {
  const { user } = useContext(AuthContext);

  return <div>HELLO USER: {user?.email}</div>;
}

export default AuthUserHomePage;

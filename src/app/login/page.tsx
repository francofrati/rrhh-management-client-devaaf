"use client";
import React, { useCallback, useRef } from "react";

import { signInWithEmail } from "@/firebase/authentication";
import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";
import { homeRoute } from "@/routesPaths";

function LoginPage() {
  const emailRef = useRef<null | HTMLInputElement>(null);
  const passwordRef = useRef<null | HTMLInputElement>(null);

  const { user } = useAuth();

  const handleLogin = useCallback(async (email: string, password: string) => {
    signInWithEmail(email, password);
  }, []);

  if (user) return redirect(homeRoute);
  return (
    <form
      className="flex flex-col gap-4 items-center py-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(
          emailRef.current?.value as string,
          passwordRef.current?.value as string
        );
      }}
    >
      <h2>INICIAR SESION</h2>
      <label>
        <input
          type="email"
          name="email"
          placeholder="Ingresar Email"
          ref={emailRef}
          className="border-slate-200 border-[2px] rounded-sm px-3 py-1"
        />
      </label>
      <label>
        <input
          type="password"
          name="password"
          placeholder="Ingresar Contraseña"
          ref={passwordRef}
          className="border-slate-200 border-[2px] rounded-sm px-3 py-1"
        />
      </label>
      <button type="submit" className="bg-slate-200 px-3 py-1 text-center">
        Entrar
      </button>
    </form>
  );
}

export default LoginPage;

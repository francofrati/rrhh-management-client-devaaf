"use client";
import React, { useContext } from "react";

import { signOutFromFirebase } from "@/firebase/authentication";
import { AuthContext } from "@/contexts/authentication/authenticationProvider";
import Link from "next/link";
import { employeesRoute, homeRoute } from "@/routesPaths";

function Sidebar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="h-screen fixed left-0 top-0 w-[200px] border-r-[3px] border-r-slate-200 py-10 pl-6">
      <header>
        <section className="flex items-center gap-3">
          <img
            className="rounded-full w-[40px] h-[40px] object-contain border-2 border-slate-200"
            src={user.company.companyImg}
            alt="company image"
          />
          <img
            className="rounded-full w-[40px] h-[40px] object-contain border-2 border-slate-200"
            src={user.profileImg}
            alt="user profile image"
          />
          <span className="whitespace-nowrap text-ellipsis overflow-hidden">
            {user.name}
          </span>
        </section>
      </header>
      <ul className="flex flex-col gap-4 mt-10">
        <Link href={homeRoute} className="cursor-pointer">
          Inicio
        </Link>
        <li className="cursor-pointer">Recibos</li>
        <Link href={employeesRoute} className="cursor-pointer">
          Empleados
        </Link>
      </ul>
      <button
        type="button"
        onClick={signOutFromFirebase}
        className="bg-red-200 px-5 py-2 text-center rounded-sm mt-20"
      >
        Salir
      </button>
    </nav>
  );
}

export default Sidebar;

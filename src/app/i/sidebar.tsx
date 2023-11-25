"use client";
import React from "react";

import { signOutFromFirebase } from "@/firebase/authentication";

function Sidebar() {
  return (
    <nav className="h-screen fixed left-0 top-0 w-[200px] border-r-[3px] border-r-slate-200 py-10 pl-6">
      <ul className="flex flex-col gap-4">
        <li>Inicio</li>
        <li>Recibos</li>
        <li>Empleados</li>
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

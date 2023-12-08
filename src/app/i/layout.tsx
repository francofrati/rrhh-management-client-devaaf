import React, { ReactNode } from "react";

import Sidebar from "./sidebar";

import EmployeesProvider from "@/contexts/employees/employeesProvider";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <EmployeesProvider>
      <>
        <Sidebar />
        <main className="ml-[200px]">{children}</main>
      </>
    </EmployeesProvider>
  );
}

export default Layout;

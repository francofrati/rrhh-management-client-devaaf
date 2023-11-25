import React, { ReactNode } from "react";

import Sidebar from "./sidebar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <main className="ml-[200px]">{children}</main>
    </>
  );
}

export default Layout;

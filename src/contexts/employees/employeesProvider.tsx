"use client";
import { ReactNode, createContext, useCallback, useState } from "react";

import { getEmployeesByCompany } from "@/lib/employees/employees";

import { Employees } from "@/types/employees";

interface contextProps {
  loadEmployees: (companyId: string | number, userId: string) => void;
  employees: Array<Employees>;
  loadingEmployees: boolean;
}

export const EmployeesContext = createContext<contextProps>({
  employees: [],
  loadEmployees: () => {},
  loadingEmployees: true,
});

export default function EmployeesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [employees, setEmployees] = useState<Array<Employees>>([]);
  const [loadingEmployees, setLoadingEmployees] = useState<boolean>(true);

  const loadEmployees = useCallback(
    async (companyId: string | number, userId: string) => {
      try {
        const employees = await getEmployeesByCompany(companyId, userId);
        setEmployees(employees);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingEmployees(false);
      }
    },
    [setEmployees]
  );
  return (
    <EmployeesContext.Provider
      value={{ employees, loadEmployees, loadingEmployees }}
    >
      {children}
    </EmployeesContext.Provider>
  );
}

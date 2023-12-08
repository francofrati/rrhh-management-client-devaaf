"use client";
import { ReactNode, createContext, useCallback, useState } from "react";

import { getEmployeesByCompany } from "@/lib/employees/employees";

import { Employees } from "@/types/employees";

interface contextProps {
  loadEmployees: (companyId: string | number, userId: string) => void;
  employees: Array<Employees>;
}

export const EmployeesContext = createContext<contextProps>({
  employees: [],
  loadEmployees: () => {},
});

export default function EmployeesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [employees, setEmployees] = useState<Array<Employees>>([]);

  const loadEmployees = useCallback(
    async (companyId: string | number, userId: string) => {
      try {
        const employees = await getEmployeesByCompany(companyId, userId);
        setEmployees(employees);
      } catch (error) {
        console.error(error);
      }
    },
    [setEmployees]
  );
  return (
    <EmployeesContext.Provider value={{ employees, loadEmployees }}>
      {children}
    </EmployeesContext.Provider>
  );
}

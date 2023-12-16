"use client";
import { AuthContext } from "@/contexts/authentication/authenticationProvider";
import { EmployeesContext } from "@/contexts/employees/employeesProvider";
import { getEmployeeByIdandCompanyId } from "@/lib/employees/employees";
import { Employees } from "@/types/employees";
import { useParams } from "next/navigation";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";

export default function EmployeePage() {
  const [loadedEmployee, setLoadedEmployee] = useState<Employees>();

  const { user } = useContext(AuthContext);
  const { employees } = useContext(EmployeesContext);

  const { employeeId } = useParams();

  const employee = useMemo(() => {
    if (employees.length) return employees.find((e) => e.id === employeeId);
    if (loadedEmployee) return loadedEmployee;
    return undefined;
  }, [employeeId, loadedEmployee]);

  const getEmployee = useCallback(async () => {
    try {
      if (employee) return;
      if (employees.length) return;
      if (loadedEmployee) return;
      if (!user) return;

      const companyId = user.company.companyId;
      const userId = user.uid;

      const employeeRes = await getEmployeeByIdandCompanyId(
        companyId,
        userId,
        employeeId as string
      );

      setLoadedEmployee(employeeRes as any);
    } catch (error) {
      console.error(error);
    }
  }, [employeeId, user, employees, employee]);

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <>
      {employee ? (
        <>
          <img
            src={employee.profile_img}
            className="rounded-full w-[150px] h-[150px] shadow-sm border-2 border-slate-300"
          />
          <h4>{employee.first_name + " " + employee.last_name}</h4>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

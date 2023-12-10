import { useContext, useEffect, useMemo } from "react";

import { Table } from "antd";

import { AuthContext } from "@/contexts/authentication/authenticationProvider";
import { EmployeesContext } from "@/contexts/employees/employeesProvider";

import { columns } from "./config";

import { Employees } from "@/types/employees";

export default function EmployeesList() {
  const { user } = useContext(AuthContext);
  const {
    employees: allEmployees,
    loadEmployees,
    loadingEmployees,
  } = useContext(EmployeesContext);

  const employees: Array<Employees & { key: string | number }> = useMemo(() => {
    if (!allEmployees.length) return [];
    return allEmployees.map((employee) => {
      const { id, address, first_name, last_name, phone_number, profile_img } =
        employee;
      return {
        ...employee,
        key: id,
        name: first_name + " " + last_name,
        address,
        phone_number,
        profile_img,
      };
    });
  }, [allEmployees, user]);

  useEffect(() => {
    if (allEmployees.length) return;
    const companyId = user.company.companyId;
    const userId = user.uid;
    loadEmployees(companyId, userId);
  }, [user]);

  return (
    <Table
      columns={columns}
      dataSource={employees}
      bordered
      loading={loadingEmployees}
    />
  );
}

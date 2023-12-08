import axios from "axios";

import { Employees } from "@/types/employees";

import { getEmployeesByCompanyUrl } from "@/server/routes/employees";

export const getEmployeesByCompany = async (
  companyId: string | number,
  uid: string
) => {
  const body = {
    uid,
  };
  const { data: employees } = await axios.post<Array<Employees>>(
    getEmployeesByCompanyUrl(companyId),
    body
  );

  return employees;
};

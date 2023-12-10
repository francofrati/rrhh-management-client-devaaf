import axios from "axios";

import { AddNewEmployeeBody, Employees } from "@/types/employees";

import {
  addNewEmployeeUrl,
  getEmployeesByCompanyUrl,
} from "@/server/routes/employees";

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

export const addNewEmployee = async (
  companyId: string | number,
  userId: string,
  employeeInfo: AddNewEmployeeBody
) => {
  const body = {
    ...employeeInfo,
    uid: userId,
  };

  await axios.post(addNewEmployeeUrl(companyId), body);
};

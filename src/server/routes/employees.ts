import { baseUrl, companiesPath, employeesPath } from "../config";

export const getEmployeesByCompanyUrl = (companyId: string | number) =>
  baseUrl + employeesPath + companiesPath + "/" + companyId;

export const addNewEmployeeUrl = (companyId: string | number) =>
  baseUrl + employeesPath + "/new" + companiesPath + "/" + companyId;

export const getEmployeeByIdandCompanyIdUrl = (
  companyId: string | number,
  employeeId: string | number
) =>
  baseUrl + employeesPath + "/" + employeeId + companiesPath + "/" + companyId;

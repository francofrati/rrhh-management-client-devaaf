export const homeRoute = "/i";
export const employeesRoute = homeRoute + "/empleados";
export const employeeRoute = (employeeId: string | number) =>
  employeesRoute + "/" + employeeId;

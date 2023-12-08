"use client";
import CreateEmployeeForm from "./components/createEmployee";
import EmployeesList from "./components/employeesList/employeesList";

function EmployeesPage() {
  return (
    <div>
      <CreateEmployeeForm />
      <EmployeesList />
    </div>
  );
}

export default EmployeesPage;

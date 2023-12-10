import { AuthContext } from "@/contexts/authentication/authenticationProvider";
import { addNewEmployee } from "@/lib/employees/employees";
import { addNewEmployeeSchema } from "@/lib/validations/employeesValidationSchemas";
import { AddNewEmployeeBody } from "@/types/employees";
import { Formik, Form, Field } from "formik";
import { useCallback, useContext, useState } from "react";

export default function CreateEmployeeForm() {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const { user } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (employeeInfo: AddNewEmployeeBody, resetForm: any) => {
      try {
        setSubmitting(true);

        const { uid, company } = user;

        await addNewEmployee(company.companyId, uid, employeeInfo);
        resetForm();
      } catch (error: any) {
        alert(error.message);
      } finally {
        setSubmitting(false);
      }
    },
    [setSubmitting, user]
  );

  return (
    <section className="p-3">
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          dni: "",
          address: "",
        }}
        validationSchema={addNewEmployeeSchema}
        onSubmit={async (values, helpers) => {
          const { resetForm } = helpers;
          await handleSubmit(values, resetForm);
        }}
        enableReinitialize
      >
        {({ errors }) => (
          <Form className="flex flex-col gap-2 w-1/2">
            <Field
              name="first_name"
              placeholder="Nombre"
              className="border py-2 px-3"
            />
            {errors.first_name}
            <Field
              name="last_name"
              placeholder="Apellido"
              className="border py-2 px-3"
            />
            {errors.last_name}
            <Field
              name="email"
              placeholder="Email"
              className="border py-2 px-3"
            />
            {errors.email}
            <Field
              name="phone_number"
              placeholder="Numero de telefono"
              className="border py-2 px-3"
            />
            {errors.phone_number}
            <Field
              name="dni"
              placeholder="Documento"
              className="border py-2 px-3"
            />
            {errors.dni}
            <Field
              name="address"
              placeholder="Direccion"
              className="border py-2 px-3"
            />
            {errors.address}
            <button
              disabled={submitting}
              type="submit"
              className={`${
                submitting ? "opacity-60" : "opacity-100"
              } py-2 bg-slate-200 border border-slate-300 text-center`}
            >
              Agregar Empleado
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}

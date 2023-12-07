import { Formik, Form, Field } from "formik";

export default function CreateEmployeeForm() {
  return (
    <section className="p-3">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          dni: "",
          address: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex flex-col gap-2 w-1/2">
          <Field
            name="firstName"
            placeholder="Nombre"
            className="border py-2 px-3"
          />
          <Field
            name="lastName"
            placeholder="Apellido"
            className="border py-2 px-3"
          />
          <Field
            name="email"
            placeholder="Email"
            className="border py-2 px-3"
          />
          <Field
            name="phoneNumber"
            placeholder="Numero de telefono"
            className="border py-2 px-3"
          />
          <Field
            name="dni"
            placeholder="Documento"
            className="border py-2 px-3"
          />
          <Field
            name="address"
            placeholder="Direccion"
            className="border py-2 px-3"
          />
          <button
            type="submit"
            className="py-2 bg-slate-200 border border-slate-300 text-center"
          >
            Agregar Empleado
          </button>
        </Form>
      </Formik>
    </section>
  );
}

import * as Yup from "yup";

export const addNewEmployeeSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "No supera el minimo de caracteres")
    .required("Primer nombre requerido!")
    .max(50, "Maximo 50 caracteres!"),
  last_name: Yup.string()
    .required("Apellido requerido!")
    .max(50, "Maximo 50 caracteres!"),
  email: Yup.string().email("Email invalido!").required("Email requerido!"),
  address: Yup.string()
    .required("Direccion requerida!")
    .max(50, "Maximo 50 caracteres!"),
  dni: Yup.string().required("DNI requerido!").max(50, "Maximo 50 caracteres!"),
  phone_number: Yup.string()
    .required("Telefono requerido!")
    .max(50, "Maximo 50 caracteres!"),
});

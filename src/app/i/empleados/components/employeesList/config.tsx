import { Employees } from "@/types/employees";

import { ColumnsType } from "antd/es/table";

export const columns: ColumnsType<Employees & { key: number | string }> = [
  {
    key: "profile_img",
    dataIndex: "profile_img",
    title: "",
    align: "center",
    render: (url) => (
      <img src={url} className="rounded-full w-[50px] h-[50px]  mx-auto" />
    ),
  },
  {
    key: "name",
    dataIndex: "name",
    title: "Nombre",
    align: "center",
  },
  {
    key: "email",
    dataIndex: "email",
    title: "Email",
    align: "center",
  },
  {
    key: "dni",
    dataIndex: "dni",
    title: "DNI",
    align: "center",
  },
  {
    key: "phone_number",
    dataIndex: "phone_number",
    title: "Telefono",
    align: "center",
  },
  {
    key: "address",
    dataIndex: "address",
    title: "Dirección",
    align: "center",
  },
];

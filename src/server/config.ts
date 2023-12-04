export const baseUrl =
  process.env.ENV === "PROD"
    ? "https://rrhh-management-server-devaaf.onrender.com/"
    : "http://localhost:8000";

export const sessionPath = "/ses";

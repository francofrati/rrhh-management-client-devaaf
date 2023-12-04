import { getAuthorizationUrl } from "@/server/routes/session";
import axios from "axios";

export const getAuthorization = async (uid: string) => {
  const { data: res } = await axios.post(getAuthorizationUrl, { uid });

  return res;
};

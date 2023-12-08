import axios from "axios";

import { User } from "firebase/auth";

import { getAuthorizationUrl } from "@/server/routes/session";

import { getAuthorizationRes } from "@/types/server";

export const getAuthorization = async (uid: string) => {
  const { data: res } = await axios.post<getAuthorizationRes>(
    getAuthorizationUrl,
    { uid }
  );

  return res;
};

export const createAuthUserObject = (
  firebaseData: User,
  apiData: getAuthorizationRes
) => {
  const company = createAuthCompanyObject(apiData);
  return {
    ...firebaseData,
    name: apiData.name,
    profileImg: apiData.profileImg,
    company,
  };
};

const createAuthCompanyObject = (apiData: getAuthorizationRes) => {
  return {
    companyId: apiData.company,
    companyImg: apiData.companyImg,
  };
};

import { useQuery } from "@tanstack/react-query";
import { UserDataType } from "../types/UserTypes";
import { request } from "../utils/axios.utils";

const fetchUsersData: (role: string) => Promise<UserDataType[]> = (
  role: string
) => {
  return request({ url: `/api/user?role=${role}` });
};

export const useUsersData = (email: string, role: string) => {
  return useQuery(["all-buyers", email], () => fetchUsersData(role));
};

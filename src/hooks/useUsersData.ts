import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { UserDataType } from "../types/UserTypes";
import { request } from "../utils/axios.utils";

const fetchUsersData: (role: string) => Promise<UserDataType[]> = (
  role: string
) => {
  return request({ url: `/api/user?role=${role}` });
};

const deleteUser = (id: string) => {
  return request({ url: `/api/user/${id}`, method: "delete" });
};

const makeAdminUser = (id: string) => {
  return request({ url: `/api/user/${id}`, method: "patch" });
};

export const useUsersData = (email: string, role: string) => {
  return useQuery(["all-users", email, role], () => fetchUsersData(role));
};

export const useDeleteUser = (email: string, role: string) => {
  const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["all-users", email, role]);
      toast.success("User Deleted Successfully");
    },
  });
};

export const useMakeAdminUser = (email: string, role: string) => {
  const queryClient = useQueryClient();
  return useMutation(makeAdminUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["all-users", email, role]);
      toast.success("User Deleted Successfully");
    },
  });
};

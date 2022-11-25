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

export const useUsersData = (role: string) => {
  return useQuery(["all-users", role], () => fetchUsersData(role));
};

export const useDeleteUser = (role: string) => {
  const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["all-users", role]);
      toast.success("User Deleted Successfully");
    },
  });
};

export const useMakeAdminUser = (role: string) => {
  const queryClient = useQueryClient();
  return useMutation(makeAdminUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["all-users", role]);
      toast.success("User Deleted Successfully");
    },
  });
};

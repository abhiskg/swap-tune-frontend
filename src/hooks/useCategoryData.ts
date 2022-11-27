import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CategoryDataType, CategoryInputType } from "../types/CategoryTypes";
import { request } from "../utils/axios.utils";

const addCategory = (data: CategoryInputType) => {
  return request({ url: `/api/category`, method: "post", data: data });
};

const fetchAllCategories: () => Promise<
  CategoryDataType[] | undefined
> = () => {
  return request({ url: `/api/category` });
};

export const useCategoryData = () => {
  return useQuery(["all-category"], fetchAllCategories);
};

export const useAddCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(addCategory, {
    onSuccess: () => {
      toast.success("New Category Added");
      queryClient.invalidateQueries(["all-category"]);
    },
  });
};

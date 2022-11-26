import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ProductInputTypes } from "../types/ProductTypes";
import { request } from "../utils/axios.utils";

const fetchMyProducts = (email: string) => {
  return request({ url: `/api/product?email=${email}` });
};

const createNewProduct = (products: ProductInputTypes) => {
  return request({ url: `/api/product`, method: "post", data: products });
};

export const useMyProductsData = (email: string) => {
  return useQuery(["my-products"], () => fetchMyProducts(email));
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(["my-products"]);
      toast.success("New Product Added");
    },
  });
};

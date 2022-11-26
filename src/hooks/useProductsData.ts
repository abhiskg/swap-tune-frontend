import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ProductDataTypes, ProductInputTypes } from "../types/ProductTypes";
import { request } from "../utils/axios.utils";

const fetchMyProducts: (email: string) => Promise<ProductDataTypes[]> = (
  email: string
) => {
  return request({ url: `/api/product?email=${email}` });
};

const createNewProduct = (products: ProductInputTypes) => {
  return request({ url: `/api/product`, method: "post", data: products });
};

const toggleAdvertiseMode = (id: string) => {
  return request({ url: `/api/product/${id}`, method: "patch" });
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

export const useToggleAdvertiseMode = () => {
  const queryClient = useQueryClient();
  return useMutation(toggleAdvertiseMode, {
    onSuccess: () => {
      queryClient.invalidateQueries(["my-products"]);
      toast.success("Advertise mode updated");
    },
  });
};

import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios.utils";

const createNewProduct = (product: string) => {
  return request({ url: `/api/product`, method: "post", data: product });
};

export const useProductsData = () => {};

export const useCreateProduct = () => {
  return useMutation(createNewProduct);
};

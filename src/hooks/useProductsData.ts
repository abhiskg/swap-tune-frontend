import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ProductDataTypes, ProductInputTypes } from "../types/ProductTypes";
import { request } from "../utils/axios.utils";

const fetchAllProducts: () => Promise<ProductDataTypes[]> = () => {
  return request({ url: `/api/v1/products/all` });
};

const fetchMyProducts: (email: string) => Promise<ProductDataTypes[]> = (
  email: string
) => {
  return request({ url: `/api/v1/seller/products/${email}` });
};

const fetchProductsByCategory: (
  category: string
) => Promise<ProductDataTypes[]> = (category: string) => {
  return request({ url: `/api/v1/products/${category}` });
};

const fetchAdvertisedProduct: () => Promise<ProductDataTypes[]> = () => {
  return request({
    url: `/api/v1/products/advertised?status=available&isAdvertised=true`,
  });
};

const fetchReportedProduct: () => Promise<ProductDataTypes[]> = () => {
  return request({ url: `/api/v1/admin/products/reported` });
};

const createNewProduct = (products: ProductInputTypes) => {
  return request({
    url: `/api/v1/seller/product/new`,
    method: "post",
    data: products,
  });
};

const toggleAdvertiseMode = (id: string) => {
  return request({ url: `/api/v1/seller/product/${id}`, method: "patch" });
};
const toggleProductReportedOption = (data: { id: string; report: string }) => {
  return request({
    url: `/api/v1/product/report?id=${data.id}&report=${data.report}`,
    method: "patch",
  });
};

const deleteProduct = (id: string) => {
  return request({ url: `/api/v1/seller/product/${id}`, method: "delete" });
};

export const useProductsData = () => {
  return useQuery(["products"], () => fetchAllProducts());
};
export const useMyProductsData = (email: string) => {
  return useQuery(["products", "user"], () => fetchMyProducts(email));
};

export const useProductsByCategory = (category: string) => {
  return useQuery(["products", category], () =>
    fetchProductsByCategory(category)
  );
};

export const useAdvertiseProducts = () => {
  return useQuery(["products", "advertised"], fetchAdvertisedProduct);
};

export const useReportedProducts = () => {
  return useQuery(["products", "reported"], fetchReportedProduct);
};

export const useCreateProduct = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(createNewProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(["products", "user"]);
      toast.success("New Product Added");
      navigate("/dashboard/seller/my-products");
    },
  });
};

export const useToggleAdvertiseMode = () => {
  const queryClient = useQueryClient();
  return useMutation(toggleAdvertiseMode, {
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("Advertise mode updated");
    },
  });
};

export const useToggleProductReportedOption = () => {
  const queryClient = useQueryClient();

  return useMutation(toggleProductReportedOption, {
    onSuccess: () => {
      queryClient.invalidateQueries(["products", "reported"]);
      toast.success("Product Report updated");
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("Product has been removed");
    },
  });
};

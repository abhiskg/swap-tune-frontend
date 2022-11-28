import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ProductDataTypes, ProductInputTypes } from "../types/ProductTypes";
import { request } from "../utils/axios.utils";

const fetchMyProducts: (email: string) => Promise<ProductDataTypes[]> = (
  email: string
) => {
  return request({ url: `/api/product/seller/${email}` });
};

const fetchProductsByCategory: (
  category: string
) => Promise<ProductDataTypes[]> = (category: string) => {
  return request({ url: `/api/product/${category}` });
};

const fetchAdvertisedProduct: () => Promise<ProductDataTypes[]> = () => {
  return request({ url: `/api/product?status=available&isAdvertised=true` });
};

const fetchReportedProduct: () => Promise<ProductDataTypes[]> = () => {
  return request({ url: `/api/product/reports` });
};

const createNewProduct = (products: ProductInputTypes) => {
  return request({ url: `/api/product`, method: "post", data: products });
};

const toggleAdvertiseMode = (id: string) => {
  return request({ url: `/api/product/${id}`, method: "patch" });
};
const toggleProductReportedOption = (data: { id: string; report: string }) => {
  return request({
    url: `/api/product/reports?id=${data.id}&report=${data.report}`,
    method: "patch",
  });
};

const deleteProduct = (id: string) => {
  return request({ url: `/api/product/${id}`, method: "delete" });
};

export const useMyProductsData = (email: string) => {
  return useQuery(["my-products"], () => fetchMyProducts(email));
};

export const useProductsByCategory = (category: string) => {
  return useQuery(["products", category], () =>
    fetchProductsByCategory(category)
  );
};

export const useAdvertiseProducts = () => {
  return useQuery(["product-advertised"], fetchAdvertisedProduct);
};

export const useReportedProducts = () => {
  return useQuery(["product-reported"], fetchReportedProduct);
};

export const useCreateProduct = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(createNewProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(["my-products"]);
      toast.success("New Product Added");
      navigate("/dashboard/seller/my-products");
    },
  });
};

export const useToggleAdvertiseMode = () => {
  const queryClient = useQueryClient();
  return useMutation(toggleAdvertiseMode, {
    onSuccess: () => {
      queryClient.invalidateQueries(["my-products"]);
      queryClient.invalidateQueries(["product-advertised"]);
      toast.success("Advertise mode updated");
    },
  });
};

export const useToggleProductReportedOption = () => {
  const queryClient = useQueryClient();

  return useMutation(toggleProductReportedOption, {
    onSuccess: () => {
      queryClient.invalidateQueries(["product-reported"]);
      toast.success("Product Reported");
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(["my-products"]);
      toast.success("Product has been removed");
    },
  });
};

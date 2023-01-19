import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { OrderDataTypes, OrderInputTypes } from "../types/OrderTypes";
import { request } from "../utils/axios.utils";

const fetchOrdersByEmail: (email: string) => Promise<OrderDataTypes[]> = (
  email: string
) => {
  return request({ url: `/api/v1/orders?email=${email}` });
};

const fetchOrderById: (id: string) => Promise<OrderDataTypes> = (
  id: string
) => {
  return request({ url: `/api/v1/order/${id}` });
};

const createNewOrder = (order: OrderInputTypes) => {
  return request({ url: `/api/v1/order/new`, method: "post", data: order });
};

export const useOrdersData = (email: string) => {
  return useQuery(["my-orders"], () => fetchOrdersByEmail(email));
};

export const useOrderData = (id: string) => {
  return useQuery(["order", id], () => fetchOrderById(id));
};

export const useCreateNewOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewOrder, {
    onSuccess: () => {
      toast.success("Booking Successful, Check Dashboard");
      queryClient.invalidateQueries(["my-orders"]);
    },
    onError(error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
  });
};

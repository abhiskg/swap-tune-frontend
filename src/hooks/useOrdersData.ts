import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { OrderInputTypes } from "../types/OrderTypes";
import { request } from "../utils/axios.utils";

const createNewOrder = (order: OrderInputTypes) => {
  return request({ url: `/api/order`, method: "post", data: order });
};

export const useOrdersData = () => {};

export const useCreateNewOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewOrder, {
    onSuccess: () => {
      toast.success("Booking Successful");
      queryClient.invalidateQueries(["my-orders"]);
    },
    onError(error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
  });
};

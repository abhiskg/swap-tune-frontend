import axios, { AxiosResponse, AxiosError } from "axios";

const client = axios.create({ baseURL: `http://localhost:5000` });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    "swap-tune"
  )}`;

  const onSuccess = (response: AxiosResponse) => {
    if (response.status === 200 && response.data.success) {
      return response.data.data;
    }
  };
  const onError = (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      window.location.href = "/";
    }
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};

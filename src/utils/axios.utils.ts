import axios, { AxiosResponse, AxiosError } from "axios";

const client = axios.create({ baseURL: `http://localhost:5000` });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;

  const onSuccess = (response: AxiosResponse) => response;
  const onError = (error: AxiosError) => {
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};

import axios from "axios";
import { DataRes } from "../types/res/DataRes";
import { ErrorRes } from "../types/res/ErrorRes";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response.data = new DataRes({
      message: response?.data?.message,
      result: response?.data?.result,
      status: response.status,
    });
    return response;
  },
  function (response) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const data = new ErrorRes({
      message: response?.response?.data?.message,
      errors: response?.response?.data?.errors,
      status: response.status,
    });
    response.response.data = data;
    return response.response;
  }
);

export default instance;

import { LoginPayload } from "../types/req/auth/LoginPayload";
import { RegisterPayload } from "../types/req/auth/ResgisterPayload";
import axios from "./axiosCustomize";

export const registerAPI = async (payload: RegisterPayload) => {
  const result = await axios.post("/auth/register", payload);
  return result;
};

export const loginAPI = async (payload: LoginPayload) => {
  const result = await axios.post("/auth/login", payload);
  return result;
};

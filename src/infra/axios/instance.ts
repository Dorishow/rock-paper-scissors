import axios from "axios";
import { API_URL } from "@/../env";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 0,
});

export const getInstance = () => axiosInstance;

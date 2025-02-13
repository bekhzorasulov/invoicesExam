import axios from "axios";

const baseURL = "https://json-api.uz/api/project/Invoice/data";

export const axiosInstance = axios.create({ baseURL });

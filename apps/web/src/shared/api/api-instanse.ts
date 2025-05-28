import axios, { AxiosInstance } from "axios";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

console.log("API URL: ", API_BASE_URL)

export const api: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: "application/json",
    },
    // withCredentials: true,
});


// axiosInstance.interceptors.response.use(
//     (response) => response.data,
//     (error) => {
//         const message = error.response?.data?.message || error.message || "API request failed";
//         return Promise.reject(new Error(message));
//     }
// );
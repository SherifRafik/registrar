import axios from "axios";

export const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
export const AUTH_TOKEN = import.meta.env.VITE_TMDB_AUTH_TOKEN;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

const _get = (url: string, config = {}) => {
  return apiClient.get(url, config);
};

export { _get };

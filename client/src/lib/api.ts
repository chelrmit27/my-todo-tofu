import axios from 'axios';
import { BASE_URL } from '@/base-url/BaseUrl';

// Create centralized API instance
export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 10000,
});

// Add request interceptor for authentication
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    if (!config.headers) {
      config.headers = new axios.AxiosHeaders();
    }
    config.headers.set('Authorization', `Bearer ${token}`);
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
      localStorage.removeItem('token');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export default api;

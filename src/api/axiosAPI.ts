import axios from 'axios';
import {envs} from '../config';

const axiosAPI = axios.create({
  baseURL: envs.API_DOMAIN,
  withCredentials: true, // Include credentials if needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add a request interceptor to attach authentication tokens if required
/* axiosAPI.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // Adjust if using a different storage method
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
); */

// Optional: Add a response interceptor for global error handling
axiosAPI.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default axiosAPI;

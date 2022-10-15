import axios from 'axios';
import { getCookie } from '../../cookie';

export const axiosInstance = axios.create({
  baseURL: 'http://115.85.180.6:8080',
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
  },
});

export const login = async (json) => {
  try {
    return await axiosInstance.post(`/login`, json);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

import axios from 'axios';
import { getCookie } from '../../cookie';

export const axiosInstance = axios.create({
  baseURL: 'http://115.85.180.6:8080',
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
  },
});

export const updateUserNickname = async (id, json) => {
  id *= 1;

  try {
    console.log(typeof id);
    return await axiosInstance.put(`/user/${id}/updateNickname`, json);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

export const updateUserEmail = async (id, json) => {
  try {
    return await axiosInstance.put(`/user/${id}/updateEmail`, json);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

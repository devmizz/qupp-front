import axios from 'axios';
import { getCookie } from '../../cookie';

export const axiosInstance = axios.create({
  baseURL: 'http://qupp.ddnsking.com:8080',
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
  },
});

export const postAnswer = async (id, content) => {
  try {
    return await axiosInstance.post(`/question/${id}/answer`, content);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

export const putAnswer = async (id, content) => {
  try {
    return await axiosInstance.put(`/answer/${id}`, content);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

export const deleteAnswer = async (id) => {
  try {
    return await axiosInstance.delete(`/answer/${id}`);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

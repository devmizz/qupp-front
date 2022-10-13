import axios from 'axios';
import { getCookie } from '../../cookie';

export const axiosInstance = axios.create({
  baseURL: 'http://qupp.ddnsking.com:8080',
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
  },
});

export const postQuestion = async (content) => {
  try {
    return await axiosInstance.post(`/question`, content);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

export const putQuestion = async (id, content) => {
  try {
    return await axiosInstance.put(`/question/${id}`, content);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

export const deleteQuestion = async (id) => {
  try {
    return await axiosInstance.delete(`/question/${id}`);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

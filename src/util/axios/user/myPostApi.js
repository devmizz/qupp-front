import axios from 'axios';
import { getCookie } from '../../cookie';

export const axiosInstance = axios.create({
  baseURL: 'http://115.85.180.6:8080',
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
  },
});

export const getMyQuestions = async (id, page) => {
  try {
    return await axiosInstance.get(`/user/${id}/questions?page=${page - 1}`);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

export const getMyAnswers = async (id, page) => {
  try {
    return await axiosInstance.get(`/user/${id}/answers?page=${page - 1}`);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

export const getMyComments = async (id, page) => {
  try {
    return await axiosInstance.get(`/user/${id}/comments?page=${page - 1}`);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

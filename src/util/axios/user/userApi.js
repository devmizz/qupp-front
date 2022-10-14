import axios from 'axios';
import { getCookie } from '../../cookie';

export const axiosInstance = axios.create({
  baseURL: 'http://115.85.180.6:8080',
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
    // withCredentials: true,
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

export const updateUserNickname = async (id, json) => {
  try {
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

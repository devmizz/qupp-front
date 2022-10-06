import axios from 'axios';
import { getCookie } from '../../cookie';

export const axiosInstance = axios.create({
  baseURL: 'http://qupp.ddnsking.com:8080',
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
  },
});

export const postQuestion = async (content) => {
  var data = {};
  try {
    data = await axiosInstance.post(`/question`, content);
  } catch (error) {
    console.error(error);
  }
  return data;
};

export const putQuestion = async (id, content) => {
  var data = {};
  try {
    data = await axiosInstance.put(`/question/${id}`, content);
  } catch (error) {
    console.error(error);
  }
  return data;
};

export const deleteQuestion = async (id) => {
  try {
    return await axiosInstance.delete(`/question/${id}`);
  } catch (error) {
    alert(error.response.data.msg);
  }
};

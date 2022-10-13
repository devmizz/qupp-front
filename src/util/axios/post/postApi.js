import axios from 'axios';
import { getCookie } from '../../cookie';

export const axiosInstance = axios.create({
  baseURL: 'http://qupp.ddnsking.com:8080',
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
  },
});

export const getPost = async (id) => {
  try {
    return await axiosInstance.get(`/question/${id}`);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

export const getPosts = async (selectedCategory, selectedPage) => {
  try {
    return await axiosInstance.get(
      `/questions?page=${selectedPage - 1}&category=${selectedCategory}`
    );
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

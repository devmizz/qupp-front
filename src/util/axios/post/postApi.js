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
    const { data } = await axiosInstance.get(`/question/${id}`);

    return data;
  } catch (error) {
    console.error(error);
  }

  return null;
};

export const getPosts = async (selectedCategory, selectedPage) => {
  try {
    const { data } = await axiosInstance.get(
      `/questions?page=${selectedPage - 1}&category=${selectedCategory}`
    );

    return data;
  } catch (error) {
    console.error(error);
  }

  return null;
};

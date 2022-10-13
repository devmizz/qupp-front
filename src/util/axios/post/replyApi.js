import axios from 'axios';
import { getCookie } from '../../cookie';

export const axiosInstance = axios.create({
  baseURL: 'http://qupp.ddnsking.com:8080',
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
  },
});

export const postQuestionReply = async (questionId, json) => {
  try {
    return await axiosInstance.post(`/question/${questionId}/comment`, json);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

export const postAnswerReply = async (questionId, answerId, json) => {
  try {
    return await axiosInstance.post(
      `/question/${questionId}/answer/${answerId}/comment`,
      json
    );
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

export const updateReply = async (id, json) => {
  try {
    return await axiosInstance.put(`/comment/${id}`, json);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

export const deleteReply = async (id) => {
  try {
    return await axiosInstance.delete(`/comment/${id}`);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }
};

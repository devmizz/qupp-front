import axios from 'axios';
import { getCookie } from './cookie';

export const axiosInstance = axios.create({
  baseURL: 'http://115.85.180.6:8080',
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

export const postAnswer = async (id, content) => {
  var data = {};
  try {
    data = await axiosInstance.post(`/question/${id}/answer`, content);
  } catch (error) {
    console.error(error);
  }
  return data;
};

export const putAnswer = async (id, content) => {
  try {
    return await axiosInstance.put(`/answer/${id}`, content);
  } catch (error) {
    console.error(error);
  }
};

export const signUp = async (json) => {
  var data = {};
  try {
    data = await axiosInstance.post(`/user`, json);
  } catch (error) {
    console.error(error);
    if (error.response.status === 400) {
      alert(error.response.data.msg);
    }
  }

  return data;
};

export const login = async (json) => {
  var data = {};
  try {
    data = await axiosInstance.post(`/login`, json);
  } catch (error) {
    console.error(error);
    alert(error.response.data.msg);
  }

  return data;
};

export const postQuestionReply = async (questionId, json) => {
  try {
    return await axiosInstance.post(`/question/${questionId}/comment`, json);
  } catch (error) {
    alert(error.response.data.msg);
  }

  return {};
};

export const postAnswerReply = async (questionId, answerId, json) => {
  try {
    return await axiosInstance.post(
      `/question/${questionId}/answer/${answerId}/comment`,
      json
    );
  } catch (error) {
    alert(error.response.data.msg);
  }
};

export const updateReply = async (id, json) => {
  try {
    return await axiosInstance.put(`/comment/${id}`, json);
  } catch (error) {
    alert(error.response.data.msg);
  }
};

export const deleteReply = async (id) => {
  try {
    return await axiosInstance.delete(`/comment/${id}`);
  } catch (error) {
    alert(error.response.data.msg);
  }
};

export const updateUserNickname = async (id, json) => {
  try {
    return await axiosInstance.put(`/user/${id}/updateNickname`, json);
  } catch (error) {
    alert(error.response.data.msg);
  }
};

export const updateUserEmail = async (id, json) => {
  try {
    return await axiosInstance.put(`/user/${id}/updateEmail`, json);
  } catch (error) {
    alert(error.response.data.msg);
  }
};

export const getMyQuestions = async (id, page) => {
  try {
    return await axiosInstance.get(`/user/${id}/questions?page=${page - 1}`);
  } catch (error) {
    alert(error.response.data.msg);
  }

  return null;
};

export const getMyAnswers = async (id, page) => {
  try {
    return await axiosInstance.get(`/user/${id}/answers?page=${page - 1}`);
  } catch (error) {
    alert(error.response.data.msg);
  }

  return null;
};

export const getMyReplys = async (id, page) => {
  try {
    return await axiosInstance.get(`/user/${id}/comments?page=${page - 1}`);
  } catch (error) {
    alert(error.response.data.msg);
  }

  return null;
};

export const deletePost = async (id, qa) => {
  try {
    return await axiosInstance.delete(`/${qa}/${id}`);
  } catch (error) {
    alert(error.response.data.msg);
  }
};

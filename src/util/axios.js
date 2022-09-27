import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://115.85.180.6:8080',
});

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

export const getMyPosts = async (id, page) => {
  try {
    return await axiosInstance.get(`/user/${id}/questions?page=${page}`);
  } catch (error) {
    alert(error.response.data.msg);
  }

  return null;
};

export const getPost = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/question/${id}`);

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

export const postAnswer = async (id, content) => {
  var data = {};
  try {
    data = await axiosInstance.post(`/question/${id}/answer`, content);
  } catch (error) {
    console.error(error);
  }
  return data;
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

export const updateUserInfo = async (id, json) => {
  try {
    return await axiosInstance.put(`user/${id}`, json);
  } catch (error) {
    alert(error.response.data.msg);
  }
};

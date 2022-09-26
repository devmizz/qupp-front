import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://ec2-3-37-201-15.ap-northeast-2.compute.amazonaws.com:8080",
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

export const getPost = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/question/${id}`);

    return data;
  } catch (error) {
    console.error(error);
  }

  return null;
};

export const setAnswer = async (id, content) => {
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

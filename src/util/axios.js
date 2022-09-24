import axios from "axios";

export const axiosInstace = axios.create({
  baseURL: "http://ec2-3-37-201-15.ap-northeast-2.compute.amazonaws.com:8080",
});

export const getPosts = async (selectedCategory, selectedPage) => {
  try {
    const { data } = await axiosInstace.get(
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
    const { data } = await axiosInstace.get(`/question/${id}`);

    return data;
  } catch (error) {
    console.error(error);
  }

  return null;
};

export const setAnswer = async (id, content) => {
  try {
    const { data } = await axiosInstace.post(`/question/${id}/answer`, content);
  } catch (error) {
    console.error(error);
  }
};

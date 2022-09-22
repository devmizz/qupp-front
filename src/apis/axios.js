import axios from "axios";

export const axiosInstace = axios.create({
  baseURL: "http://ec2-3-37-201-15.ap-northeast-2.compute.amazonaws.com:8080",
});

export const getPosts = async () => {
  try {
    const { data } = await axiosInstace.get(`/questions`);

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

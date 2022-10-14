import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://115.85.180.6:8080',
});

export const signUp = async (json) => {
  try {
    return await axiosInstance.post(`/user`, json);
  } catch (error) {
    console.error(error);
    if (error.response.status === 400) {
      alert(error.response.data.msg);
    }
  }
};

export const isDuplicateEmail = async (email) => {
  try {
    await axiosInstance.get(`/user/duplicate/email?email=${email}`);
    return false;
  } catch (error) {
    console.error(error);
    if (error.response.status === 400) {
      return true;
    }
    return false;
  }
};

export const isDuplicateNickname = async (nickname) => {
  try {
    const res = await axiosInstance.get(
      `/user/duplicate/nickname?nickname=${nickname}`
    );
    return false;
  } catch (error) {
    console.error(error);
    if (error.response.status === 400) {
      return true;
    }
    return false;
  }
};

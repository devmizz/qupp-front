import { SET, RESET } from '../constants/types';

export const setUser = (data) => {
  return {
    type: SET,
    payload: data,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

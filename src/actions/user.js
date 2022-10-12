import { SET, UNSET } from '../constants/types';

export const setUser = (data) => {
  return {
    type: SET,
    payload: data,
  };
};

export const unset = () => {
  return {
    type: UNSET,
  };
};

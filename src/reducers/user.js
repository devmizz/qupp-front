import { SET, UNSET } from '../constants/types';

const userState = {
  id: -1,
  email: '',
  nickname: '',
};

export default function user(state = userState, action) {
  switch (action.type) {
    case SET: {
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        nickname: action.payload.nickname,
      };
    }
    case UNSET: {
      return {
        ...state,
        id: -1,
        email: '',
        nickname: '',
      };
    }
    default: {
      return state;
    }
  }
}

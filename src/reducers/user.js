import { SET, RESET } from '../constants/types';

const initialState = {
  id: -1,
  email: '',
  nickname: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET: {
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        nickname: action.payload.nickname,
      };
    }
    case RESET: {
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

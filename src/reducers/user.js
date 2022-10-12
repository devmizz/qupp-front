import { SET, UNSET } from '../actions/types';

const userState = {
  id: -1,
  email: '',
  nickname: '',
  jwt: '',
};

export default function user(state = userState, action) {
  switch (action.type) {
    case SET: {
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        nickname: action.payload.nickname,
        jwt: action.payload.token,
      };
    }
    case UNSET: {
      return {};
    }
  }
}

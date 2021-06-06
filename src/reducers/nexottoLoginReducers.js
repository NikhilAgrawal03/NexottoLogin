import {
  NEXOTTO_LOGIN_FAIL,
  NEXOTTO_LOGIN_REQUEST,
  NEXOTTO_LOGIN_SUCCESS,
  NEXOTTO_AUTH_FAIL,
  NEXOTTO_AUTH_REQUEST,
  NEXOTTO_AUTH_SUCCESS,
} from "../constants/nexottoLoginConstants";

export const userNexottoLoginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case NEXOTTO_LOGIN_REQUEST:
      return { ...state, loading: true };
    case NEXOTTO_LOGIN_SUCCESS:
      return { loading: false, user: action.payload };
    case NEXOTTO_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userNexottoAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case NEXOTTO_AUTH_REQUEST:
      return { ...state, loading: true };
    case NEXOTTO_AUTH_SUCCESS:
      return { loading: false, userAuthInfo: action.payload };
    case NEXOTTO_AUTH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

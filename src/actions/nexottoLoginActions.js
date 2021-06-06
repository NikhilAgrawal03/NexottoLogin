import {
  NEXOTTO_LOGIN_FAIL,
  NEXOTTO_LOGIN_REQUEST,
  NEXOTTO_LOGIN_SUCCESS,
  NEXOTTO_AUTH_FAIL,
  NEXOTTO_AUTH_REQUEST,
  NEXOTTO_AUTH_SUCCESS,
} from "../constants/nexottoLoginConstants";
import axios from "axios";

export const getnexottologindetails = () => async (dispatch) => {
  try {
    dispatch({ type: NEXOTTO_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      "https://run.mocky.io/v3/386baee0-3694-4384-b69a-8e9798aac3a2#",
      config
    );

    dispatch({
      type: NEXOTTO_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("NexottoLoginInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: NEXOTTO_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const nexottoAuthenticate = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: NEXOTTO_AUTH_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      "https://run.mocky.io/v3/e9fbbabc-ef69-4bf1-9628-f3c9fe991119",
      {
        email,
        password,
      },
      config
    );

    dispatch({
      type: NEXOTTO_AUTH_SUCCESS,
      payload: data,
    });

    localStorage.setItem("NexottoAuthInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: NEXOTTO_AUTH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

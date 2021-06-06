import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  userNexottoLoginReducer,
  userNexottoAuthReducer,
} from "./reducers/nexottoLoginReducers";

const reducers = combineReducers({
  userNexottoAuth: userNexottoAuthReducer,
  userNexottoLogin: userNexottoLoginReducer,
});

const NexottoLoginInfoFromStorage = localStorage.getItem("NexottoLoginInfo")
  ? JSON.parse(localStorage.getItem("NexottoLoginInfo"))
  : null;

const NexottoAuthInfoFromStorage = localStorage.getItem("NexottoAuthInfo")
  ? JSON.parse(localStorage.getItem("NexottoAuthInfo"))
  : null;

const initialState = {
  userNexottoLogin: { NexottoLoginInfo: NexottoLoginInfoFromStorage },
  userNexottoAuth: { NexottoAuthInfo: NexottoAuthInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

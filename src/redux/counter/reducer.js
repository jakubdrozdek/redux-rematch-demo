// redux/counter/reducer.js
import {
  INCREMENT,
  INCREMENT_BY,
  DECREMENT,
  DECREMENT_BY,
  INCREMENT_BY_ASYNC_SUCCESS,
  INCREMENT_BY_ASYNC_REQUEST,
  INCREMENT_BY_ASYNC_FAILURE
} from "./constants";

const initialState = {
  count: 0,
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case INCREMENT_BY:
      return {
        ...state,
        count: state.count + action.value
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case DECREMENT_BY:
      return {
        ...state,
        count: state.count - action.value
      };
    case INCREMENT_BY_ASYNC_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case INCREMENT_BY_ASYNC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        count: state.count + action.value
      };
    case INCREMENT_BY_ASYNC_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

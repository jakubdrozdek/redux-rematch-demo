// redux/counter/actions.js
import * as types from "./constants";
import { wait } from "../../utils/promises";

export const increment = () => ({
  type: types.INCREMENT
});
export const decrement = () => ({
  type: types.DECREMENT
});

export const incrementBy = value => ({
  type: types.INCREMENT_BY,
  value
});
export const decrementBy = value => ({
  type: types.DECREMENT_BY,
  value
});

export const incrementByAsyncRequest = () => ({
  type: types.INCREMENT_BY_ASYNC_REQUEST
});
export const incrementByAsyncSuccess = value => ({
  type: types.INCREMENT_BY_ASYNC_SUCCESS,
  value
});
export const incrementByAsyncFailure = error => ({
  type: types.INCREMENT_BY_ASYNC_FAILURE,
  error
});

export const incrementByAsync = value => async dispatch => {
  dispatch(incrementByAsyncRequest());

  await wait(2000);

  if (value > 0) {
    dispatch(incrementByAsyncSuccess(value));
  } else {
    dispatch(incrementByAsyncFailure("Value must be greater than 0."));
  }
};

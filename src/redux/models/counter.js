// redux/models/counter.js
import { wait } from "../../utils/promises";

export default {
  state: {
    count: 0,
    error: null
  },
  reducers: {
    increment: state => ({ ...state, count: state.count + 1 }),
    decrement: state => ({ ...state, count: state.count - 1 }),
    incrementBy: (state, payload) => ({
      ...state,
      count: state.count + payload
    }),
    decrementBy: (state, payload) => ({
      ...state,
      count: state.count - payload
    }),
    incrementByAsyncRequest: state => ({
      ...state,
      error: null
    }),
    incrementByAsyncSuccess: (state, payload) => ({
      ...state,
      count: state.count + payload
    }),
    incrementByAsyncFailure: (state, payload) => ({
      ...state,
      error: payload
    })
  },
  effects: {
    async incrementByAsync(payload) {
      this.incrementByAsyncRequest();

      await wait(2000);

      if (payload > 0) {
        this.incrementByAsyncSuccess(payload);
      } else {
        this.incrementByAsyncFailure("Value must be greater than 0.");
      }
    }
  }
};

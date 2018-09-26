import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { actions } from "./redux/counter";
import "./App.css";

export class App extends Component {
  render() {
    const {
      count,
      error,
      isLoading,
      increment,
      incrementBy,
      decrement,
      decrementBy,
      incrementByAsync
    } = this.props;

    return (
      <div className="Counter">
        Counter: {count}
        <div>
          <div className="Counter-actions">
            Synchronous actions:
            <div>
              <button onClick={() => increment()}>+1</button>
              <button onClick={() => decrement()}>-1</button>
            </div>
            <div>
              <button onClick={() => incrementBy(5)}>+5</button>
              <button onClick={() => decrementBy(5)}>-5</button>
            </div>
          </div>
        </div>
        <div className="Counter-actions">
          Asynchronous actions:
          <div>
            <button disabled={isLoading} onClick={() => incrementByAsync(2)}>
              Valid +2
            </button>
            <button disabled={isLoading} onClick={() => incrementByAsync(-1)}>
              Invalid -1
            </button>
          </div>
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  count: state.counter.count,
  error: state.counter.error,
  isLoading: state.counter.isLoading
});
const mapDispatch = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapState,
  mapDispatch
)(App);

import React, { Component } from "react";
import { connect } from "react-redux";

import "./CurrencyPicker.css";

export class CurrencyPicker extends Component {
  render() {
    const { currencies, selected } = this.props;

    return (
      <div className="CurrencyPicker">
        <label htmlFor="currency_picker">Select currency:</label>
        <select
          id="currency_picker"
          value={selected}
          onChange={this.handleChange}
        >
          {currencies.map(currency => (
            <option key={currency.name} value={currency.name}>
              {currency.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  handleChange = event => {
    this.props.select(event.target.value);
  };
}

const mapState = ({ currency: { currencies, selected } }) => ({
  currencies,
  selected
});

const mapDispatch = ({ currency: { select } }) => ({
  select
});

export default connect(
  mapState,
  mapDispatch
)(CurrencyPicker);

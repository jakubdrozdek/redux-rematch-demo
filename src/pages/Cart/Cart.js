import React, { Component } from "react";
import { connect } from "react-redux";

import { select } from "../../redux/store";
import { randomIntInRange, randomFloatInRange } from "../../utils/random";

import CurrencyPicker from "../../components/CurrencyPicker";
import Products from "../../components/Products";

export class Cart extends Component {
  render() {
    const { products, total } = this.props;

    return (
      <div>
        <CurrencyPicker />
        <Products
          products={products}
          onAdd={this.handleAddProduct}
          onRemove={this.handleRemoveProduct}
          total={total}
        />
      </div>
    );
  }

  handleAddProduct = () => {
    const { addProduct } = this.props;

    const newProduct = {
      name: "Product",
      qty: randomIntInRange(1, 10),
      price: randomFloatInRange(0.1, 100.0).toFixed(2)
    };

    addProduct(newProduct);
  };

  handleRemoveProduct = id => {
    const { removeProduct } = this.props;

    removeProduct(id);
  };
}

const selectors = select(models => ({
  products: models.cart.productsInSelectedCurrency,
  selectedCurrency: models.currency.getSelectedCurrency,
  total: models.cart.totalInSelectedCurrency
}));

const mapState = state => ({
  ...selectors(state)
});

const mapDispatch = ({ cart: { add, remove } }) => ({
  addProduct: add,
  removeProduct: remove
});

export default connect(
  mapState,
  mapDispatch
)(Cart);

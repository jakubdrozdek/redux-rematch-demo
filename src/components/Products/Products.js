import React, { Component } from "react";

import ProductsTable from "./components/ProductsTable";
import { formatCurrency } from "../../utils/format";

import "./Products.css";

export class Products extends Component {
  render() {
    const { onAdd, products, total } = this.props;
    return (
      <div className="Products">
        <button className="Products-add" onClick={onAdd}>
          Add a random product
        </button>
        {products.length > 0 && (
          <div>
            <ProductsTable products={products} onRemove={this.handleRemove} />
            <div className="Products-summary">
              <b>Total:</b> {formatCurrency(total)}
            </div>
          </div>
        )}
      </div>
    );
  }

  handleRemove = id => {
    this.props.onRemove(id);
  };
}

export default Products;

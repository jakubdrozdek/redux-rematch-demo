import React, { Component } from "react";

import { formatCurrency } from "../../../../utils/format";

export class ProductsTable extends Component {
  render() {
    const { products, onRemove } = this.props;

    return (
      <table className="Products-table" border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total Price</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td align="right">{formatCurrency(product.price)}</td>
              <td align="right">{product.qty}</td>
              <td align="right">
                {formatCurrency(product.price * product.qty)}
              </td>
              <td align="center">
                <button onClick={() => onRemove(product.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductsTable;

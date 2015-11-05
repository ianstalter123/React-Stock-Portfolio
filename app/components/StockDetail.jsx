import React from 'react';
import currencyFormatter from '../utils/currencyFormatter.js';

export default class StockDetail extends React.Component {
  calculateTotalAmount() {
      return this.props.numShares * this.props.purchasePrice;
  }

  calculateCurrentPrice(stockTicker) {
    return this.props.currentPrice * this.props.numShares;
  }

  render() {
    var originalAmount = this.calculateTotalAmount(),
        realTimePrice = this.calculateCurrentPrice(this.props.ticker)

    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.ticker}</td>
        <td>{this.props.numShares}</td>
        <td>{currencyFormatter.format(this.props.purchasePrice)}</td>
        <td>{currencyFormatter.format(originalAmount)}</td>
        <td>{currencyFormatter.format(realTimePrice)}</td>
        <td>{currencyFormatter.format(realTimePrice - originalAmount)}</td>
      </tr>
    )
  }
}

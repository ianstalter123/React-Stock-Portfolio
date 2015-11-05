import React from 'react';

export default class StockDetailsForm extends React.Component {
  handleAdd(){
    var stockDetails = {
          name: this.refs.name.value,
          ticker: this.refs.ticker.value,
          numShares: this.refs.numShares.value,
          purchasePrice: this.refs.purchasePrice.value
        };
    this.props.addStockFunc(stockDetails);
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th># of shares</th>
              <th>price purchased</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input ref="name" name="name" type="text"/></td>
              <td><input ref="ticker" name="ticker" type="text"/></td>
              <td><input ref="numShares" name="numShares" type="number"/></td>
              <td><input ref="purchasePrice"name="purchasePrice" type="number"/></td>
              <td><button ref="button" type="submit" onClick={this.handleAdd.bind(this)}>Add</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

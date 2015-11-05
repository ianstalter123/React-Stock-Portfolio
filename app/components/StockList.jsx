import React from 'react';

export default class StockList extends React.Component {
  render(){
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th># Shares</th>
              <th>Price Purchased</th>
              <th>Original Total Amount</th>
              <th>Current Total Amount</th>
              <th>Lost/Gain</th>
            </tr>
          </thead>
          <tbody>
            {this.props.children}
          </tbody>
        </table>
      </div>
    );
  }
}

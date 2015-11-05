import React from 'react';
import currencyFormatter from '../utils/currencyFormatter.js';


export default class StockFooter extends React.Component {
  render() {
    var currentTotal = currencyFormatter.format(this.props.currentTotal),
        gainTotal = currencyFormatter.format(this.props.gainTotal);

    return (
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>{currentTotal}</td>
          <td>{gainTotal}</td>
        </tr>
    )
  }
}

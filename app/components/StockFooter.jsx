import React from 'react';

export default class StockFooter extends React.Component {
  render() {
    return (
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>{this.props.currentTotal}</td>
          <td>{this.props.gainTotal}</td>
        </tr>
    )
  }
}

import React from 'react';
import Select from 'react-select';

export default class StockInputSelect extends React.Component {

  render() {
    return (
      <div>
        <Select
          placeholder="Enter the name of a company or stock ticker"
          matchPos="any"
          matchProp="label"
          multi={false}
          name={this.props.name}
          options={this.props.options}
        />
      </div>
    );
  }
}

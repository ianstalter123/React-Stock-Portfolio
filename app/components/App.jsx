import React from 'react';
import StockInputSelect from './StockInputSelect.jsx';
import StockDetailsForm from './StockDetailsForm.jsx';
import StockList from './StockList.jsx';
import StockDetail from './StockDetail.jsx';
import StockFooter from './StockFooter.jsx';
import portfolio from '../data/stockPortfolio.js';
import stockRealTimeDatabase from '../data/stockDatabase.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio,
      stockRealTimeDatabase
    };
  }

  createStockDetailsList(){
    var portfolio = this.state.portfolio;

    return portfolio.map((stock, index) => {
        var currentPrice = this.getCurrentStockPrice(stock.ticker);
        return <StockDetail key={index} {...stock} currentPrice={currentPrice} />
      });
  }

  getCurrentStockPrice(ticker) {
    var stockRealTimeDatabase = this.state.stockRealTimeDatabase,
        currentStock = stockRealTimeDatabase.find((stock) => stock.ticker === ticker );

    if (!currentStock) {
      return "stock not found"
    } else {
      return currentStock.currentPrice;
    }
  }

  calculateTotalGain() {
    var portfolio = this.state.portfolio,
        totalGain = portfolio.reduce((accumulator, next) => {
          var currentPrice = this.getCurrentStockPrice(next.ticker);
          return accumulator + (currentPrice - next.purchasePrice) * next.numShares;
        }, 0);

    return totalGain.toFixed(2);
  }

  calculateCurrentTotal(){
    var portfolio = this.state.portfolio,
        totalCurrentValue = portfolio.reduce((accumulator, next) => {
          var currentPrice = this.getCurrentStockPrice(next.ticker);
          return accumulator + (next.numShares * currentPrice);
        }, 0);

    return totalCurrentValue.toFixed(2);
  }

  addStockToPortfolio(stockObject) {
    this.setState({
      portfolio: this.state.portfolio.concat(stockObject)
    });
  }

  getStockDropDown() {
    var stockRealTimeDatabase = this.state.stockRealTimeDatabase;

    return stockRealTimeDatabase.map((stock) => {
          return {
            value: stock.ticker,
            label: `${stock.ticker} - ${stock.name}`
          }
        });
  }

  render() {
    return (
      <div>
        <h1>{this.calculateTotalGain()}</h1>
        <StockInputSelect name="stockOptionlist" options={this.getStockDropDown()}/>
        <StockDetailsForm addStockFunc={this.addStockToPortfolio.bind(this)}/>
        <StockList>
          {this.createStockDetailsList()}
          <StockFooter currentTotal={this.calculateCurrentTotal()} gainTotal={this.calculateTotalGain()}/>
        </StockList>
      </div>
      )
  }
}

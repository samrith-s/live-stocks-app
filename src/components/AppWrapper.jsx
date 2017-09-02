import React from 'react';
import _ from 'lodash';

import StockItem from './StockItem';

export default class AppWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      orderBy: 'name'
    }
  }

  componentDidMount() {
    this.props.actions.startListeningToData();
  }

  renderStocksList = (stocks) => {
    if(stocks)
      return stocks.map((stock, index) => {
        return (
          <StockItem data={stock} index={index} key={`stock-item-${stock.name}`} />
        )
      });
  }

  render() {
    return (
      <div className="app">
        <div className="stock-list-container">
          <div className="left-half">
            {this.renderStocksList(_.orderBy(this.props.data,[this.state.orderBy],['asc']))}
          </div>
          <div className="right-half">
            some logo
          </div>
        </div>
      </div>
    )
  }
}

import React from 'react';
import _ from 'lodash';

import StockItem from './StockItem';
import Scrollbars from 'react-custom-scrollbars';

export default class AppWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      sortBy: 'price',
      orderBy: 'asc'
    }
  }

  componentDidMount() {
    this.props.actions.startListeningToData();
  }

  renderStocksList = (stocks, stockactions) => {
    if(stocks)
      return stocks.filter(stock => !stock.pinned).map((stock, index) => {
        return (
          <StockItem data={stock} index={index} key={`stock-item-${stock.name}`} actions={stockactions} />
        )
      });
  }

  renderPinnedStocks = (stocks, stockactions) => {
    if(stocks)
      return stocks.filter(stock => stock.pinned).map((stock,index) => {
        return (
          <StockItem data={stock} index={index} key={`stock-item-pinned-${stock.name}`} actions={stockactions} />
        )
      })
  }

  getClass = (string,action) => {
    return string===action ? " active" : " inactive";
  }

  changeSortBy = (sortBy) => {
    this.setState(_.merge({}, this.state, { sortBy: sortBy }));
  }

  changeOrderBy = (orderBy) => {
    this.setState(_.merge({}, this.state, { orderBy: orderBy }));
  }

  render() {
    let stockactions = _.pick(this.props.actions || {}, ['pinStock', 'unpinStock']);
    return (
      <div className="app">
          <Scrollbars
            renderView={props => <div className="inner-scroller" {...props} />}
          >
            <div className="pinned-stocks inner">
              <div className="list-header">
                <h3><i className="fa fa-thumb-tack" /> Pinned Stocks</h3>
              </div>
              {this.renderPinnedStocks(_.orderBy(this.props.data, ['name'], ['asc']), stockactions)}
            </div>

            <div className="stock-list-container inner">
              <div className="list-header">
                <h3><i className="fa fa-line-chart" /> All Stocks</h3>
                <div className="sorting-actions">
                  <div className="key-sort">
                    <i className={"fa fa-font" + this.getClass(this.state.sortBy, 'name')} title="Sort by name" onClick={this.changeSortBy.bind(this, 'name')} />
                    <i className={"fa fa-usd" + this.getClass(this.state.sortBy, 'price')} title="Sort by price" onClick={this.changeSortBy.bind(this, 'price')} />
                  </div>
                  <div className="order-by">
                    <i className={"fa fa-arrow-up" + this.getClass(this.state.orderBy, 'asc')} title="Ascending" onClick={this.changeOrderBy.bind(this,'asc')} />
                    <i className={"fa fa-arrow-down" + this.getClass(this.state.orderBy, 'desc')} title="Descending" onClick={this.changeOrderBy.bind(this, 'desc')} />
                  </div>
                </div>
              </div>
              {this.renderStocksList(_.orderBy(this.props.data,[this.state.sortBy],[this.state.orderBy]), stockactions)}
            </div>
        </Scrollbars>
      </div>
    )
  }
}

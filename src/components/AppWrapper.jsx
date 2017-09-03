import React from 'react';
import _ from 'lodash';

import StockItem from './StockItem';
import Insights from './Insights';

export default class AppWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      sortBy: 'price',
      orderBy: 'asc',
      topScroll: 0
    }
  }

  componentDidMount() {
    this.props.actions.startListeningToData();
    this.scroller.onscroll = () => { this.setState(_.merge({}, this.state, { topScroll: this.scroller.scrollTop })) }
  }

  renderStocksList = (stocks, stockactions) => {
    if(stocks)
      return stocks.map((stock, index) => {
        return (
          <StockItem data={stock} index={index} key={`stock-item-${stock.name}`} actions={stockactions} />
        )
      });
  }

  componentDidUpdate() {
    this.scroller.scrollTop = this.state.topScroll;
  }

  renderPinnedStocks = (stocks, stockactions) => {
    if(stocks && stocks.length>0)
      return stocks.map((stock,index) => {
        return (
          <StockItem data={stock} index={index} key={`stock-item-pinned-${stock.name}`} actions={stockactions} />
        )
      })
    else
      return <div className="no-pinned">No pinned stocks! Click on a stock to pin it.</div>
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
    let stocks = this.props.data || [];
    let stockactions = _.pick(this.props.actions || {}, ['pinStock', 'unpinStock']);

    return (
      <div className="app">
          <div className="inner-scroller" ref={ref => this.scroller = ref}>
            <h3 className="logo inner">
              <i className="logo" />Live Stocks App
            </h3>

            <Insights min={this.props.min || {}} max={this.props.max || {}} />

            <div className="pinned-stocks inner">
              <div className="pinner-stocks-wrapper">
                <div className="list-header not-inline">
                  <h3><i className="fa fa-thumb-tack" /> Pinned Stocks</h3>
                  <p>Pinned stocks are automatically sorted by name. Click on any pinned stock to unpin.</p>
                </div>
                {this.renderPinnedStocks(_.orderBy(stocks.filter(stock => stock.pinned), ['name'], ['asc']), stockactions)}
              </div>
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

              {this.renderStocksList(_.orderBy(stocks.filter(stock => !stock.pinned),[this.state.sortBy],[this.state.orderBy]), stockactions)}
            </div>
        </div>
      </div>
    )
  }
}

import React from 'react';
import moment from 'moment';

import CountUp from 'react-countup';

export default class StockItem extends React.Component {
  componentDidMount() {
    this.opacity = 1;
  }

  render() {
    let stock = this.props.data;

    return (
      <div className="stock-item"
        value={stock.status}
        ref={ref => this.ref = ref}
        style={{opacity: this.opacity||0.25}}
        onClick={stock.pinned ? this.props.actions.unpinStock.bind(this,stock) : this.props.actions.pinStock.bind(this,stock)}
      >
        <div className="stock-item-left-half">
          <div className="stock-item-status" value={stock.status}>&#9654;</div>
          <div className="stock-item-name">{stock.name}</div>
          <div className="stock-item-updated-at">{moment(stock.updatedAt).fromNow()}</div>
        </div>
        <div className="stock-item-right-half">
          {
            stock.diff ?
              <div className="stock-item-diff">({`${stock.diff.value > 0 ? "+" : "-"}$${Math.abs(stock.diff.value.toFixed(2))}`})</div>
            :
              null
          }
          <CountUp
            className="stock-item-price"
            start={stock.oldPrice || 0}
            end={stock.price || 0}
            duration={0.5}
            useEasing={true}
            useGrouping={true}
            separator=","
            decimals={2}
            decimal="."
            prefix="$ "
            suffix=""
          />
        </div>
      </div>
    )
  }
}

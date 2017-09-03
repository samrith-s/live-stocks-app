import React from 'react';
import moment from 'moment';

import CountUp from 'react-countup';
import Trend from 'react-trend';

export default class StockItem extends React.Component {
  componentDidMount() {
    this.opacity = 1;
  }

  getDiffVal = (obj, key) => {
    if(obj) {
      let change = (obj.value < 0 ? "-" : (obj.value===0 ? "" : "+"));
      let prefix = key==='value' ? "$" : "";
      let suffix = key==='percent' ? "%" : "";

      return (
        <div className="stock-item-diff">
          (
            {change} {prefix}{Math.abs((obj[key] || 0).toFixed(2))}{suffix}
          )
        </div>
      );
    }

    return null;
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
          <div className="stock-item-status" value={stock.status}><i className="fa fa-caret-right" /></div>
          <div className="stock-item-name">{stock.name}</div>
          <div className="stock-item-history-trend">
            <Trend
              data={stock.history}
              autoDrawDuration={500}
              gradient={['#c62828', '#7cb342']}
              radius={10}
              strokeLinecap={'round'}
              smooth
            />
          </div>
        </div>
        <div className="stock-item-right-half">
          <div className="top-half">
            {this.getDiffVal(stock.diff, this.props.diffVal)}
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
          <div className="bottom-half">
            <div className="stock-item-updated-at">{moment(stock.updatedAt).fromNow()}</div>
          </div>
        </div>
      </div>
    )
  }
}

import React from 'react';
import _ from 'lodash';

export default class StockGraph extends React.Component {
  constructor() {
    super();
  }

  componentWillReceiveProps = (newProps) => {
    this.constructDataSeries(newProps.data);
  }

  render() {

    let config = {
      series: this.state.series
    }

    return this.props.data ?
    :
      null
  }
}

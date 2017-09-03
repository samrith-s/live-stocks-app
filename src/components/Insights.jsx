import React from 'react';

export default class Insights extends React.Component {
  render() {
    let min = this.props.min;
    let max = this.props.max;

    return (
      <div className="insights inner">
        <div className="insight-band">

          <div className="insight-band-inner max">
            <span>Max</span>
            <h4>{max.name}</h4>
            <p>${max.price ? max.price.toFixed(2) : null}</p>
          </div>

          <div className="insight-band-inner min">
            <span>Min</span>
            <h4>{min.name}</h4>
            <p>${min.price ? min.price.toFixed(2) : null}</p>
          </div>

        </div>
      </div>
    )
  }
}

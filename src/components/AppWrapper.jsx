import React from 'react';

export default class AppWrapper extends React.Component {
  componentDidMount() {
    this.props.actions.startListeningToData();
  }

  render() {
    return (
      <div className="app">
        APP!
      </div>
    )
  }
}

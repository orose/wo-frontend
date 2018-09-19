import React, { Component } from 'react';

import ComponentHeader from '../common/ComponentHeader';

import './InfoBox.scss';

class InfoBox extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
  }

  render() {
    return (
      <section className="info-box">
        <ComponentHeader text={this.props.title} />
        <p>{this.props.text}</p>
      </section>
    );
  }
}

export default InfoBox;

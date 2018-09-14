import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ComponentHeader.scss';

class ComponentHeader extends Component {
  render() {
    return <h1 className="component-header">{this.props.text}</h1>;
  }
}

ComponentHeader.propTypes = {
  text: PropTypes.string,
};

export default ComponentHeader;

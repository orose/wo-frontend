import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PageHeader.scss';

class PageHeader extends Component {
  render() {
    return (
      <header className="page-header">
        <h1>{this.props.text}</h1>
      </header>
    );
  }
}

PageHeader.propTypes = {
  text: PropTypes.string,
};

export default PageHeader;

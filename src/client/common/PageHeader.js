import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './PageHeader.scss';

class PageHeader extends Component {
  render() {
    return (
      <header className="page-header">
        <h1>{this.props.pageTitle}</h1>
      </header>
    );
  }
}

PageHeader.propTypes = {
  text: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    pageTitle: state.global.pageTitle,
  };
}

export default connect(mapStateToProps)(PageHeader);

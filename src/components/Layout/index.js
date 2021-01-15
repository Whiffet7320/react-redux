import React, { Component } from 'react';
import './index.css';
import iPropTypes from 'prop-types';

export default class Layout extends Component {
  static propTypes = {
    header: iPropTypes.element,
    aside: iPropTypes.element,
    children: iPropTypes.node,
  }
  render() {
    return (
      <div className='container'>
        <header className="header">
          {this.props.header}
        </header>
        <div className="middle">
          <div className="aside">
            {this.props.aside}
          </div>
          <div className="main">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

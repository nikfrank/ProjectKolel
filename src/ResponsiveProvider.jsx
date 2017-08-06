import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResponsiveProvider extends Component {
  constructor(){
    super();
    this.state = {
      width: window.innerWidth
    }
  }
  componentDidMount(){
    window.addEventListener('resize', () => {
      this.setState({width: window.innerWidth})
    } )
  }
  getChildContext() {
    return this.state;
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
};

ResponsiveProvider.childContextTypes = {
  width: PropTypes.number
};

export default ResponsiveProvider;

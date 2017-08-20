import React, {Component} from 'react';
import PropTypes from 'prop-types';

import HeaderMobile from './HeaderMobile';

const DRAWER_WIDTH = 225;

class Layout extends Component {
  render() {
    const pageWidth = (this.context.width < 500) ? 'calc(100vw - 30px)' :
                      (this.context.width < 800) ?
                      'calc( 100vw - 60px )' :
                      'calc( 100vw - '+(DRAWER_WIDTH + 75)+'px )';
    
    const pageContainer = {
      width: pageWidth,
      marginLeft: (this.context.width < 500) ? 15 :
                  (this.context.width < 800) ? 30 :
                  (this.context.width < 900) ? DRAWER_WIDTH + 51 :
                  DRAWER_WIDTH + 40,
    };

    
    return (
      <div style={pageContainer}>
        <HeaderMobile/>
        {this.props.children}
      </div>
    )
  }
}
Layout.contextTypes = {
  width: PropTypes.number
};

export default Layout;

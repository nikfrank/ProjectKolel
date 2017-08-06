import React, {Component} from 'react';
import HeaderMobile from './HeaderMobile';


class Layout extends Component {
  render() {
    return (
      <div>
        <HeaderMobile/>
        {this.props.children}
      </div>
    )
  }
}
export default Layout;

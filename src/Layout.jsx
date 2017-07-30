import React, {Component} from 'react';
import Header from './Header';


class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Header/>

      </div>
    )
  }
}
export default Layout;

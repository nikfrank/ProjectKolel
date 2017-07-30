import React, {Component} from 'react';
import Header from './Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Layout extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        {this.props.children}

      </div>
    )
  }
}
export default Layout;

import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {
  render() {

    const style = {
      display: 'inline-block',
      margin: '16px 32px 16px 0',
    };
    const divBackgroundColor = {
      background-color: 'blue'
    };

    return (
      <div style={divBackgroundColor}>
        <Paper style={style}>
          <Menu>
            <MenuItem primaryText="Home" href='#/home' />
            <MenuItem primaryText="Blog" href='#/blog' />
            <MenuItem primaryText="Work" href='#/work' />
            <MenuItem primaryText="About" href='#/abouts' />
          </Menu>
        </Paper>
      </div>
    )
  }
}

export default Header;

import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const paperBarStyle = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};
const headerBar = {
  backgroundColor: 'blue',
  maxWidth: '8vw',
  height: '100vh',
  position: 'fixed',
};

class Header extends Component {
  render() {
    return (
      <div style={headerBar}>
        <Paper style={paperBarStyle}>
          <Menu>
            <MenuItem primaryText="Home" href='#/home' />
            <MenuItem primaryText="Sponsors & Donors" href='#/about' />
            <MenuItem primaryText="Memeber's site" href='#/about' />
            <MenuItem primaryText="Talmud" href='#/about' />
            <MenuItem primaryText="Mishna" href='#/about' />
            <MenuItem primaryText="Shulchan Aruch" href='#/about' />
            <MenuItem primaryText="Lectures" href='#/about' />
            <MenuItem primaryText="שיעורים בעברית" href='#/about' />
            <MenuItem primaryText="Oders" href='#/about' />
            <MenuItem primaryText="Dafyomi Central" href='#/about' />
            <MenuItem primaryText="Kollel Iyun Hadaf" href='#/about' />
            <MenuItem primaryText="Feedback" href='#/about' />
            <MenuItem primaryText="Ask A Question on the Daf" href='#/about'/>
          </Menu>
        </Paper>
      </div>
    )
  }
}

export default Header;

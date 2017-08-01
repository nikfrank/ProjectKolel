import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

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

class HeaderMobile extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
          onClick={this.handleToggle}
          />
        <Drawer open={this.state.open}>
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
        </Drawer>
      </div>

    )
  }
}

export default HeaderMobile;

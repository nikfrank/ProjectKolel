import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import MenuIcon from 'react-icons/lib/md/menu';
import CloseMenuIcon from 'react-icons/lib/md/navigate-before';
import OpenMenuIcon from 'react-icons/lib/md/navigate-next';

const DRAWER_WIDTH = 225;

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
    const seethrough = 'rgba(0,0,0,0)';
    
    return (
      <div>
        {
          this.context.width > 800 ? null :          
          <RaisedButton
              className="hover-menu-icon-button"
              style={{ position: 'fixed', zIndex: 1330, left: 0, top: 0 }}
              onTouchTap={this.handleToggle}>
            
            <CloseMenuIcon style={{
              transition: 'all 1s ease',
              color: !this.state.open ? seethrough : 'black'
            }}/>
            <MenuIcon/>
            <OpenMenuIcon style={{
              transition: 'all 1s ease',
              color: this.state.open ? seethrough : 'black'
            }}/>
            
          </RaisedButton>
        }
        
        <Drawer open={this.state.open || (this.context.width > 800)}
                width={DRAWER_WIDTH}>
          {
            this.context.width > 800 ? null :
            <MenuItem style={{ cursor: 'default', pointerEvents:'none' }}/>
          }
          
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
HeaderMobile.contextTypes = {
  width: PropTypes.number
};

export default HeaderMobile;

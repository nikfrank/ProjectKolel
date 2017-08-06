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

const menuItemStyle = {
  backgroundColor: '#182963',
  color: 'white',
  border: '2px outset gray',
};

const menuItems = [
  { title: 'Home', href: '#/home' },
  { title: 'Sponsors & Donors', href: '#/about' },
  { title: 'Member\'s site', href: '#/about' },
  { title: 'Talmud', href: '#/about' },
  { title: 'Mishna', href: '#/about' },
  { title: 'Shulchan Aruch', href: '#/about' },
  { title: 'Lectures', href: '#/about' },
  { title: 'שיעורים בעברית', href: '#/about' },
  { title: 'Oders', href: '#/about' },
  { title: 'Dafyomi Central', href: '#/about' },
  { title: 'Kollel Iyun Hadaf', href: '#/about' },
  { title: 'Feedback', href: '#/about' },
  { title: 'Ask A Question on the Daf', href: '#/about'},
];


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
              style={{
                position: 'fixed',
                zIndex: 1330,
                left: 0,
                top: 0,
              }}
              buttonStyle={{
                ...menuItemStyle,
                borderRight: 'none',
                borderBottom: 'none',
              }}
              onTouchTap={this.handleToggle}>
            
            <CloseMenuIcon style={{
              transition: 'all 1s ease',
              color: !this.state.open ? seethrough : 'white'
            }}/>
            <MenuIcon/>
            <OpenMenuIcon style={{
              transition: 'all 1s ease',
              color: this.state.open ? seethrough : 'white'
            }}/>
            
          </RaisedButton>
        }
        
        <Drawer open={this.state.open || (this.context.width > 800)}
                width={DRAWER_WIDTH}>
          {
            this.context.width > 800 ? null :
            <MenuItem style={{
              cursor: 'default',
              pointerEvents:'none',
              ...menuItemStyle,
            }}/>
          }

          {
            menuItems.map((m, i)=> (
              <MenuItem key={i}
                        primaryText={m.title}
                        style={menuItemStyle}
                        href={m.href}/>
            ) )
          }
          
        </Drawer>
      </div>

    )
  }
}
HeaderMobile.contextTypes = {
  width: PropTypes.number
};

export default HeaderMobile;

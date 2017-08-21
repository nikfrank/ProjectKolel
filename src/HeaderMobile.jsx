import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import MenuIcon from 'react-icons/lib/md/menu';
import CloseMenuIcon from 'react-icons/lib/md/navigate-before';
import OpenMenuIcon from 'react-icons/lib/md/navigate-next';

import routes from './routes';

import './HeaderMobile.css'
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

              routes.map(({ path, title }, i)=> (
                <MenuItem key={i}
                          primaryText={title}
                          style={menuItemStyle}
                          href={'#' + path}/>
                
              ))
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

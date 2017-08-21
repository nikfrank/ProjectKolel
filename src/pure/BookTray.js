import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import './BookTray.css'

class BookTray extends Component{
  render(){
    return (
      <div className='BookTray'>
          <List>
            <ListItem primaryText="Inbox" />
            <ListItem primaryText="Starred"  />
            <ListItem primaryText="Sent mail" />
            <ListItem primaryText="Drafts" />
            <ListItem primaryText="Inbox"  />
          </List>
      </div>
    );
  }
};
export default BookTray;

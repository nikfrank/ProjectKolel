import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import './BookTray.css'
import series from '../p/Mishna/Series';

class BookTray extends Component{
  render(){
    return (
      
      <div className='BookTray'>
        {
          series.map(({ title, books, id }) => (
            <List key={id}>
              <div className='BookTray-Series'>
                <ListItem primaryText={title} />
                {
                  books.map(({ title }) =>
                    <ListItem primaryText={title}  BookTray-Books/>
                  )
                }
              </div>
            </List>
          )) 
        }
      </div>
    );
  }
};
export default BookTray;

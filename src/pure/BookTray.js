import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import './BookTray.css'
import series from '../p/Mishna/Series';

class BookTray extends Component{
  render(){
    return (
      <div className='BookTray'>
        <ul className='BookTray-Series'>
          {
            series.map(({title, id}) => (
              <li key={id}>{title}</li>
            ))
          }
        </ul>
        {
          series.map(({ title, books, id }) => (
            <ul key={id} className='BookTray-Books'>
              {
                books.map(({ title }) => (
                  <li className='BookTray-Book'>
                    {title}
                  </li>
                ))
              }
            </ul>
          )) 
        }
      </div>
    );
  }
};
export default BookTray;

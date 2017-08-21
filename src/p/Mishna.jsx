import React, {Component} from 'react';
import './Mishna.css'
import BookTray from '../pure/BookTray'

class Mishna extends Component {
  render() {
    return (
      <div className="MishnaPage">
        <BookTray />
      </div>
    );
  }
}
export default Mishna;

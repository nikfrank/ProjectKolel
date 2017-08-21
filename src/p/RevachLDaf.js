import React, {Component} from 'react';
import './Mishna.css'
import MarqueeScroller from '../pure/MarqueeScroller';

class Mishna extends Component {
  render() {
    return (
      <div className="InsightsPage">
        <MarqueeScroller style={{ maxHeight: '93vh' }} />
      </div>
    );
  }
}
export default Mishna;

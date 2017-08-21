import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import './BookTray.css'


import scrolls from './scroll.json';

'onmouseover="copyspeed=pausespeed" onmouseout="copyspeed=marqueespeed"> '

class MarqueeScroller extends Component {
  render(){
    return (
      <div>

        {
          scrolls.map((scroll, si) => (
            
            <div key={si}>
              <span id="vmarquee">

                
                <p>&nbsp;
                </p>
                
                <b>Summary of the Daf
                </b>
                
                {
                  scroll.map(({ lines, readmore }, gi) => (
                    <div key={gi}>
                      { lines.map((line, li) => (<p key={li}>{line}</p>) ) }
                      <p>READ MORE</p>
                      <p>{readmore}</p>
                    </div>
                  ))
                }

                <center>~ ~ ~ ~ ~ ~</center>
                                
              </span>
            </div>
          ) )
        }
        
      </div>
    );
  }
};
export default MarqueeScroller;

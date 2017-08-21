import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import './MarqueeScroller.css'


import scrolls from './scroll.json';

'onmouseover="copyspeed=pausespeed" onmouseout="copyspeed=marqueespeed"> '

class MarqueeScroller extends Component {
  state = {
    readmores: scrolls.map((s, i) => s.map((g, gi)=> false ) ),
  }

  toggleReadmore = (s, g)=>{
    this.setState({
      readmores: {
        ...this.state.readmores,
        [s]: {
          ...this.state.readmores[s],
          [g]: !this.state.readmores[s][g],
        },
      },
    });
  }
  
  render(){
    return (
      <div className="MarqueeScroller" style={this.props.style}>
        <div>
          {
            scrolls.map((scroll, si) => (
              
              <div key={si}>
                <span id="vmarquee">
                  
                  <b>Summary of the Daf</b>
                  
                  {
                    scroll.map(({ lines, readmore }, gi) => (
                      <div key={gi}>
                        { lines.map((line, li) => (<p key={li}>{line}</p>) ) }
                        <a
                          className={this.state.readmores[si][gi]? 'active':''}
                          onClick={()=> this.toggleReadmore(si, gi)}>
                          READ MORE
                        </a>
                        {
                          this.state.readmores[si][gi]?
                          <p>{readmore}</p> : null
                        }
                        <hr/>
                      </div>
                    ))
                  }

                  <center>~ ~ ~ ~ ~ ~</center>
                  
                </span>
              </div>
            ) )
          }
          
        </div>
      </div>
    );
  }
};
export default MarqueeScroller;

import React, { Component } from 'react';
import './App.css';
import {GridList, GridTile} from 'material-ui/GridList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SearchIcon from 'react-icons/lib/md/search';

import Subheader from 'material-ui/Subheader';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';

import tiles from './homeTiles';

import bannerImg from '../imgs/main-20yr.png';
import { calendarPeek } from '../imgs';

const DRAWER_WIDTH = 225;


class Home extends Component {
  state = {
    googleText: '',
  }
  
  googleTextChanged = (e)=>{
    this.setState({ googleText: e.target.value });
  }

  render() {
    const pageWidth = (this.context.width < 500) ? 'calc( 100vw - 50px)' :
                      (this.context.width < 800) ?
                      'calc( 100vw - 60px )' :
                      'calc( 100vw - '+(DRAWER_WIDTH + 75)+'px )';
    
    const homeGridStyles = {
      root: {
        display: 'flex',
        position: 'absolute',
        justifyContent: 'space-around',
        width: pageWidth,
        marginLeft: (this.context.width < 800) ? 30 :
                    (this.context.width < 900) ? DRAWER_WIDTH + 51 :
                    DRAWER_WIDTH + 40,
        
        flexFlow: 'column',
      },
      gridList: {
        overflowY: 'auto',
      },
    };

    const gridCols = this.context.width < 600 ? 2 :
                     this.context.width < 900 ?
                     3 : 5;
    
    
    return (
      <div>
        <div style={{ display: 'flex',
                      flexDirection:'row',
                      flexWrap:'wrap'}}>          
          <div style={{ 
            display: 'block',
            margin: '0 0 0 '+((this.context.width < 500) ? 0 :
                              (this.context.width < 800) ?
                              '10vw' : '30vw'),
            textAlign: 'center',
          }}>
            <img src={bannerImg} style={{ width: 'auto',
                                          maxWidth: '80vw',
                                          height: '170px',}}/>
            <h3>The Internet Center for the Study of Talmud</h3>
            <i>brought to you by <a href="/">Kollel Iyun Hadaf</a></i>
            <p><small>Rosh Kollel: Rav Mordecai Kornfeld</small></p>
          </div>

          <div style={{
            maxWidth: 120,
            margin: '60px 0 0 35px',
            textAlign: 'center',
          }}>
            <img src={calendarPeek} style={{
              width: 120,
              height: 130,
            }}/>
            <a href="/" style={{ display: 'block' }}>
              Order you FREE Dafyomi calendar!
            </a>
          </div>
        </div>
        
        <div style={homeGridStyles.root}>
          <div>

            <GridList
                cellHeight={180}
                style={homeGridStyles.gridList}
                className='tileList'
                cols={gridCols}>

              <Subheader style={{
                padding: 0,
                backgroundColor: '#92c1ff',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                textAlign:'center',
                lineHeight: '1.5em',
              }}>
                <div className='homeGridHeader' style={{
                  color: '#808000',
                }}>
                  <p>
                    THE CURRENT SEDER NEZIKIN HAS BEEN DEDICATED לע"נ
                    REBBETZIN HENIE MEISELS AND HER MOTHER REBBETZIN HINDA TRESS OB"M
                  </p>
                  <p><b>
                    THE MORDECAI (MARCUS) BEN ELIMELECH SHMUEL KORNFELD
                    MASECHES SANHEDRIN
                  </b></p>
                </div>
                <div>
                  Sunday's Daf is	יד	(14)
                  SANEHDRIN 14 (7 Av) - Dedicated in memory of Dr. Simcha
                  Bekelnitzky (Simcha Gedalya ben Shraga Feibush) of Queens, N.Y.,
                  Niftar 7 Av 5757, by his wife and daughters. G-d-fearing and
                  knowledgeable, Simcha was well known in the community for his
                  Chesed and Tzedakah. He will long be remembered.
                </div>
              </Subheader>

              {
                tiles.map(({ title, img, Icon }, i) => (
                  <a className='tileA' href="#/about" key={i}>
                    <GridTile
                        title={title}
                        className='homeTile'
                        cols={.5}>
                      <div className='imageCSS'>
                        {img ? (<img src={img} alt=''/>) : <Icon/>}
                      </div>
                    </GridTile>
                  </a>
                ))
              }
            </GridList>
          </div>
          
          <div style={{backgroundColor: 'white'}}>
            <TextField
                floatingLabelText="Search Dafyomi from Google!"
                onChange={this.googleTextChanged}/>
            <a target="_blank"
               href={'https://www.google.co.il/search?q='+
                     encodeURIComponent(
                       this.state.googleText+
                       ' site:http://dafyomi.co.il'
                     )}>
              <FloatingActionButton style={{}}>
                <SearchIcon />
              </FloatingActionButton>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
Home.contextTypes = {
  width: PropTypes.number
};

export default Home;

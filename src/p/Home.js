import React, { Component } from 'react';
import './App.css';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import PropTypes from 'prop-types';

import tiles from './homeTiles';

import bannerImg from '../imgs/main-20yr.png';
import { calendarPeek } from '../imgs';

const DRAWER_WIDTH = 225;


class Home extends Component {
  render() {

    const pageWidth = (this.context.width < 800) ?
                      'calc( 100vw - 30px )' :
                      'calc( 100vw - '+(DRAWER_WIDTH + 75)+'px )';
    
    const homeGridStyles = {
      root: {
        display: 'flex',
        position: 'absolute',
        justifyContent: 'space-around',
        width: pageWidth,
        marginLeft: (this.context.width < 800) ? 10 :
                    (this.context.width < 900) ? DRAWER_WIDTH + 61 :
                    DRAWER_WIDTH + 55,
        
        flexFlow: 'row rap',
      },
      gridList: {
        overflowY: 'auto',
      },
    };

    
    return (
      <div>
        <div style={{ display: 'flex',
                      flexDirection:'row',
                      flexWrap:'wrap'}}>          
          <div style={{ 
            display: 'block',
            margin: '0 0 0 '+((this.context.width < 800) ? '10vw' : '30vw'),
            textAlign: 'center',
          }}>
            <img src={bannerImg} style={{ width: 'auto',
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
          

          <GridList
              cellHeight={180}
              style={homeGridStyles.gridList}
              className='tileList'
              cols={this.context.width > 900 ? 5 : 3}>

            <Subheader>
              <div className='homeGridHeader'>
                /*THE CURRENT SEDER NEZIKIN HAS BEEN DEDICATED לע"נ
                REBBETZIN HENIE MEISELS AND HER MOTHER REBBETZIN HINDA TRESS OB"M
                THE MORDECAI (MARCUS) BEN ELIMELECH SHMUEL KORNFELD
                MASECHES SANHEDRIN*/
              </div>
              <div>
                /*Sunday's Daf is	יד	(14)
                SANEHDRIN 14 (7 Av) - Dedicated in memory of Dr. Simcha
                Bekelnitzky (Simcha Gedalya ben Shraga Feibush) of Queens, N.Y.,
                Niftar 7 Av 5757, by his wife and daughters. G-d-fearing and
                knowledgeable, Simcha was well known in the community for his
                Chesed and Tzedakah. He will long be remembered.*/
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
      </div>
    );
  }
}
Home.contextTypes = {
  width: PropTypes.number
};

export default Home;

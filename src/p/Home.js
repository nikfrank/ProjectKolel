import React, { Component } from 'react';
import './App.css';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import FaCompass from 'react-icons/lib/fa/compass';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import PropTypes from 'prop-types';


import mishna from '../imgs/mishna.png';
const imgs = {
  mishna,
};

const homeGridStyles = {
  root: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'space-around',
    minWidth: '20vw',
    marginLeft: '20%',
    flexFlow: 'row rap',
  },
  gridList: {
    overflowY: 'auto',
  },
};

const tile = [
  {
    img: imgs.mishna,
    title: 'Mishna',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Insights',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Background',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Review Q&A',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Full Review',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'English Charts',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Point by Point',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Halachah',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Daily Quiz',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Tosfos',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: "Revach L'daf",
  },
  {
    Icon: FaPlayCircleO,
    title: 'Podcasts',
  },
  {
    Icon: FaCompass,
    title: 'Navigator',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'יוסף דעת',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'טבלאות',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'גלי מסכתא',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'חידונים',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Yerushalmi matchup',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Yerushalmi Audio',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Our Replies',
  },
];

class Home extends Component {
  render() {
    return (
      <div>
        <div style={homeGridStyles.root}>
          <GridList
              cellHeight={180}
              style={homeGridStyles.gridList}
              className='tileList'
              cols={this.context.width > 768 ? 5 : 2}>
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
              tile.map(({ title, img, Icon }, i) => (
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

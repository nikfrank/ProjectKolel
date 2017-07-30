import React, { Component } from 'react';
import './App.css';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import FaCompass from 'react-icons/lib/fa/compass';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';

class Home extends Component {
  render() {

    const homeGridStyles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
      },
    };

    const tilesData = [
      {
        img: 'public/unnamed.png',
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
        img: <FaPlayCircleO/>,
      title: 'Podcasts',
    },
    {
      img: <FaCompass/>,
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
return (
  <div>
    <div style={homeGridStyles.root}>
      <GridList
        cellHeight={180}
        style={homeGridStyles.gridList}
        >
        <Subheader>
          <div className='homeGridHeader'>
            THE CURRENT SEDER NEZIKIN HAS BEEN DEDICATED לע"נ
            REBBETZIN HENIE MEISELS AND HER MOTHER REBBETZIN HINDA TRESS OB"M
            THE MORDECAI (MARCUS) BEN ELIMELECH SHMUEL KORNFELD
            MASECHES SANHEDRIN
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
        {tilesData.map((tile) => (
          <a href='#/about'>
            <GridTile
              title={tile.title}
              className='homeTile'>
              <div>{tilesData.img}</div>
            </GridTile>
          </a>
        ))}
      </GridList>
    </div>
  </div>
);
}
}

export default Home;

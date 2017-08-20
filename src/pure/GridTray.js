
import React from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';


export default ({ width, children, tiles, subheaderStyle={} }) => {

  const gridCols = Math.min(
    width < 600 ? 2 :
    width < 900 ?
    3 : 5, tiles.length);

  const subStyles = {
    padding: 0,
    backgroundColor: '#92c1ff',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    textAlign:'center',
    lineHeight: '1.5em',
    ...subheaderStyle,
  };

    
  return (
    <div style={{
      backgroundColor: 'white',
      
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }}>

      <GridList
          cellHeight={'auto'}
          style={{ overflowY: 'auto' }}
          cols={gridCols}>

        <Subheader style={subStyles}>
          {children}
        </Subheader>

        {
          tiles.map(({ title, img, Icon, link }, i) => (
            <a href={link} key={i}>
              <GridTile
                  title={title}
                  titleStyle={{ marginLeft: -16 }}
                  className='homeTile'>
                <div>
                  {img ? (<img src={img} alt=''/>) : <Icon/>}
                </div>
              </GridTile>
            </a>
          ))
        }
      </GridList>
    </div>

  );
};

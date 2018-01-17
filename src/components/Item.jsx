import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const styles={
    cardStyle: {
      width: '80vw',
      border: '1px solid white',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      margin: '10px'
    },
    topStyle: {
      fontSize: '50px',
      fontWeight: 'bold',
      fontFamily: 'courier'
    },
    bottomStyle: {
      fontSize: '25px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
  return(
    <div style={styles.cardStyle}>
      <div style={styles.topStyle}>
        <p>{props.month}</p>
      </div>
      <div style={styles.bottomStyle}>
        <p>{props.selection}</p>
      </div>
    </div>
  );
}

Item.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
};

export default Item;

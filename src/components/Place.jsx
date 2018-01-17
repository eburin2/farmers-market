import React from 'react';
import PropTypes from 'prop-types';

function Place(props){
  const myStyles = {
    width: '200px',
    margin: '10px',
    borderRadius: '3px',
    color: 'white',
    textAlign: 'center'
  };
  return(
    <div style={myStyles}>
      <p>{props.day}</p>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </div>
  );
}

Place.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Place;

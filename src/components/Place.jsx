import React from 'react';
import PropTypes from 'prop-types';

function Place(props){
  const myStyles = {
    width: '200px',
    border: '1px solid navy',
    margin: '5px'
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

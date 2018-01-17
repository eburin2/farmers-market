import React from 'react';

function Header(){
  const myStyles = {
    width: '100vw',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center'
  };
  return (
    <div style={myStyles}>
      <style jsx>{`
          h1 {
            color: blue;
          }
      `}</style>
      <h1>Farmer's Market</h1>
    </div>
  );
}

export default Header;

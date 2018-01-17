import React from 'react';

function Header(){
  const myStyles = {
    width: '100vw',
    backgroundColor: '#424141',
    display: 'flex',
    justifyContent: 'center'
  };
  return (
    <div style={myStyles}>
      <style jsx>{`
          h1 {
            color: white;
            font-family: courier;
            font-size: 50px;
            text-transform: uppercase;
            letter-spacing: 5px;

          }

          h1:hover {
            color: yellow;
          }

          div:hover {
            animation: enlarge 1s 1s infinite;
          }

          @keyframes enlarge {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(2);
            }
          }
      `}</style>
      <h1>Farmer's Market</h1>
    </div>
  );
}

export default Header;

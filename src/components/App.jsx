import React from 'react';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import ItemList from './ItemList';

function App(){
  const myStyles = {
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  return(
    <div style={myStyles}>
      <Header/>
      <MarketSchedule />
      <ItemList />
    </div>
  );
}

export default App;

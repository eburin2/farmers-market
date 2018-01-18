import React from 'react';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import ItemList from './ItemList';
import { Switch, Route } from 'react-router-dom';
import DayList from './DayList';

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
      <Switch>
        <Route path='/daylist' component={DayList} />
        <Route exact path='/' component={MarketSchedule} />
      </Switch>
      <ItemList />
    </div>
  );
}

export default App;

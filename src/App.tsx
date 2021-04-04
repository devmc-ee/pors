import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { NavBar } from './components/NavBar';
import MainPage from './components/MainPage';
import MenuItemButton from './components/MenuItemButton';
import { MENU } from './__mock_data__/MENU';
import { useSelector } from 'react-redux';
import { AppState } from './redux/rootReducer';
function App() {


  const keyboard = MENU.map((item) => <MenuItemButton key={item.code} {...item} />);
  const { order } = useSelector(({ order }: AppState) => order);
  let orderList = [];
  for (let item in order) {
    orderList.push(<div>{item}:{order[item]}</div>)
  }

  return (
    <div className="App">

      <div className="container">
        <MainPage
          keyboard={<div>{keyboard}</div>} customer={<>Cutomer</>} order={<>{orderList}</>} checkout={<>checkout</>} />
      </div>
    </div>
  );
}

export default App;

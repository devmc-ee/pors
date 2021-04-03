import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { NavBar } from './components/NavBar';
import MainPage from './components/MainPage';
import MenuItemButton from './components/MenuItemButton';
import { MenuItemButtonType } from './types/button';
import { CURRENCY } from './dataSets/CURRENCY';
import {MENU} from './__mock_data__/MENU';
function App() {


  const keyboard = MENU.map((item)=><MenuItemButton key={item.code} {...item} />);
  return (
    <div className="App">

      <div className="container">
        <MainPage
          keyboard={<div>{keyboard}</div>} customer={<>Cutomer</>} order={<>cart</>} checkout={<>checkout</>} />
      </div>
    </div>
  );
}

export default App; 

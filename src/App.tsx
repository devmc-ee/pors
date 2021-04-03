import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { NavBar } from './components/NavBar';
import MainPage from './components/MainPage';
import MenuItemButton from './components/MenuItemButton';
import { MenuItemButtonType } from './types/button';
import { CURRENCY } from './dataSets/CURRENCY';

function App() {

  const args: MenuItemButtonType = {
    code: '1',
    name: 'Braised Pork Noodle Soup',
    price: 7,
    currencySymbol: CURRENCY.EUR.symbol,
  } 

  const keyboard = <div><MenuItemButton {...args} /><MenuItemButton {...args} /><MenuItemButton {...args} /><MenuItemButton {...args} /></div>;
  return (
    <div className="App">

      <div className="container">
        <MainPage
          keyboard={keyboard} customer={<>Cutomer</>} order={<>cart</>} checkout={<>checkout</>} />
      </div>
    </div>
  );
}

export default App;

import React, {  useState } from 'react';
import './App.css';
import Button from './components/Button';
import { NavBar } from './components/NavBar';
import MainPage from './components/MainPage';
import MenuItemButton from './components/MenuItemButton';

function App() {
  const [ value, setValue ] = useState<number>(0);
  const handleClick = (id: number) => {
    setValue(id);
  }
  const args= {
    itemNumber: 1,
    itemName: 'Braised Pork Noodle Soup',
    itemPrice: '7€',
    itemAddedQuantity: 0
}
  return (
    <div className="App">

      <div className="container">
        <MainPage keyboard={<div><MenuItemButton {...args}/><MenuItemButton {...args}/><MenuItemButton {...args}/></div>} customer={<>Cutomer</>} cart={<>cart</>} checkout={<>checkout</>} />
      </div>
    </div>
  );
}

export default App;

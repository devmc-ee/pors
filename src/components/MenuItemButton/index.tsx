import React from 'react';

import './styles/MenuItemButton.css';

export interface IMenuItemButton {
    classes?: string;
    itemNumber: number;
    itemName: string;
    itemPrice: string;
    itemAddedQuantity?: number;
}

const MenuItemButton = ({ classes = '', itemNumber, itemName, itemPrice, itemAddedQuantity = 0 }: IMenuItemButton): JSX.Element => {
    const itemQtyAddedText = itemAddedQuantity === 0 ? itemAddedQuantity : 'x' + itemAddedQuantity;
    return <button className={'menu-item container ' + classes + (itemAddedQuantity > 0? ' menu-item--active':'')}>
        <div className="menu-item__row row ">
            <div className="menu-item__number col s6">
                {itemNumber} 
            </div> 
            <div className="menu-item__name col s6">
                {itemName}  
            </div> 
        </div> 
        <div className="menu-item__row  menu-item__row--footer row">
            <div className="menu-item__price col s6">
                {itemPrice}
            </div> 
            <div className="menu-item__quantity col s6">
                {itemQtyAddedText}
            </div>
        </div>
    </button>
}
export default MenuItemButton;  
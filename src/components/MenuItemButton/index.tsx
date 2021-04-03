import { MenuItemButtonType } from '../../types/button';
import './styles/MenuItemButton.css';

const MenuItemButton = ({  classes = '', code, name, price, currencySymbol }: MenuItemButtonType): JSX.Element => {
    const addedAmount = 0;
    const itemQtyAddedText = addedAmount === 0 ? addedAmount : 'x' + addedAmount;
    const clickHandler = (code: string) => console.log(code)
    return <button onClick={()=>clickHandler(code)} className={'menu-item container ' + classes + (addedAmount > 0? ' menu-item--active':'')}>
        <div className="menu-item__row row ">
            <div className="menu-item__number col s6">
                {code} 
            </div> 
            <div className="menu-item__name col s6">
                {name}  
            </div> 
        </div> 
        <div className="menu-item__row  menu-item__row--footer row">
            <div className="menu-item__price col s6">
                {price + currencySymbol}
            </div> 
            <div className="menu-item__quantity col s6"> 
                {itemQtyAddedText}
            </div>
        </div>
    </button>
}

export default MenuItemButton;  
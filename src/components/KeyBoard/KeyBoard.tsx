import { MenuItemButtonType } from '../../types/button';
import MenuItemButton from '../MenuItemButton';

// Contains menu btns
const KeyBoard: KeyBoard = ({menuData}: KeyboardProps ) => {
    const args= {
        itemNumber: 0,
        name: '',
        price: '',  
        addedAmount: 0
    }
    
    return menuData.length > 0 ?
       <div className="keyboard"> {menuData.map((item, i) =>  <MenuItemButton key={i} {...item} />)}</div>: <></>
};
 
export default KeyBoard;

type KeyBoard = (props: KeyboardProps ) => JSX.Element;
export type KeyboardProps = {
    menuData: MenuItemButtonType[];
}

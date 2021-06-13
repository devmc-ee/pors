import { MenuItemButtonType } from '../../types/button';

// Contains menu btns
const KeyBoard: KeyBoard = ({ menuData, menuItemButton: MenuItemButton }: KeyboardProps) => {
    //@ts-ignore
    const menuItem = (item, i) => <MenuItemButton key={i} {...item} />;
    //@ts-ignore
    return menuData.length > 0 ? <div className="keyboard">{menuData.map(menuItem)}</div> : <></>;
};

export default KeyBoard;

type KeyBoard = (props: KeyboardProps) => JSX.Element;
export type KeyboardProps = {
    menuItemButton: React.FC;
    menuData: MenuItemButtonType[];
};

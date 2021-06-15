import { MenuItemButtonType } from '../../types/button';

// Contains menu btns
const KeyBoard: KeyBoard = ({ menuData, menuItemButton: MenuItemButton }: KeyboardProps) => {
    const menuItem = (item: MenuItemButtonType, i: number) => <MenuItemButton key={i} {...item} />;

    return menuData.length > 0 ? <div className="keyboard">{menuData.map(menuItem)}</div> : <></>;
};

export default KeyBoard;

type KeyBoard = (props: KeyboardProps) => JSX.Element;
export type KeyboardProps = {
    menuItemButton: React.FC;
    menuData: MenuItemButtonType[];
};

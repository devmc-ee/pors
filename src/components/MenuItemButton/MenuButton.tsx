import { MenuItemButtonType } from '../../types/button';
import { InlineIcon } from '@iconify/react';
import shoppingCartOutline from '@iconify/icons-eva/shopping-cart-outline';

interface MenuButtonProps extends MenuItemButtonType {
    addedToCartAmount: number;
    onClick: () => void;
}

const MenuItem = ({
    addedToCartAmount,
    currencySymbol,
    code,
    name,
    price,
    onClick,
    classes = '',
}: MenuButtonProps): JSX.Element => {
    return (
        <button
            onClick={onClick}
            className={'menu-item container ' + classes + (addedToCartAmount > 0 ? ' menu-item--active' : '')}
        >
            <div className="menu-item__row  ">
                <div className="menu-item__number ">{code}</div>
                <div className="menu-item__name">{name}</div>
            </div>
            <div className="menu-item__row  menu-item__row--footer ">
                <div className="menu-item__price">{price + currencySymbol}</div>
                <div className="menu-item__quantity ">
                    <InlineIcon icon={shoppingCartOutline} style={{ fontSize: '24px' }} />x {addedToCartAmount}
                </div>
            </div>
        </button>
    );
};

export default MenuItem;

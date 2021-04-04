import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from '../../redux/actions/orderActions';
import { MenuItemButtonType } from '../../types/button';
import { AppState } from '../../redux/rootReducer';
import './styles/MenuItemButton.css';

const MenuItemButton = ({ classes = '', code, name, price, currencySymbol }: MenuItemButtonType): JSX.Element => {
    const dispatch = useDispatch();
    const { order } = useSelector(({ order }: AppState) => order);

    const itemQtyAddedText = code in order ? 'x' + order[code] : 0;
    const clickHandler = (code: string) => dispatch(addToCartAction(code));

    return (
        <button
            onClick={() => clickHandler(code)}
            className={'menu-item container ' + classes + (order[code] > 0 ? ' menu-item--active' : '')}
        >
            <div className="menu-item__row row ">
                <div className="menu-item__number col s6">{code}</div>
                <div className="menu-item__name col s6">{name}</div>
            </div>
            <div className="menu-item__row  menu-item__row--footer row">
                <div className="menu-item__price col s6">{price + currencySymbol}</div>
                <div className="menu-item__quantity col s6">{itemQtyAddedText}</div>
            </div>
        </button>
    );
};

export default MenuItemButton;

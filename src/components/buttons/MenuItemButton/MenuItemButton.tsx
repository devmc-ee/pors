import { connect } from 'react-redux';
import { addToCartAction } from '../../../redux/actions/orderActions';
import { MenuItemButtonType } from '../../../types/button';
import { AppState } from '../../../redux/rootReducer';
import { Dispatch } from 'redux';
import MenuItem from './MenuButton';

const mapStateToProps = (state: AppState, { classes = '', code, name, price, currencySymbol }: MenuItemButtonType) => {
    const { order } = state.orderStates;

    return {
        addedToCartAmount: order.filter((item) => item === code).length,
        classes,
        code,
        name,
        price,
        currencySymbol,
    };
};
const mapDispatchToProps = (dispatch: Dispatch, { code }: MenuItemButtonType) => {
    return {
        onClick: () => dispatch(addToCartAction(code)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);

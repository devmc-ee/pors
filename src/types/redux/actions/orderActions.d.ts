import { ORDER } from '../../../dataSets/ACTION';
import { ProductItem } from '../../product';
export interface AddToCartAction {
    type: typeof ORDER.ADD_TO_CART;
    payload: string;
}
export default OrderActions = AddToCartAction;

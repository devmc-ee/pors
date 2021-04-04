import { OrderItem } from '../../order';
import { ProductItem } from '../../product';

interface OrderReducerStates {
    order: {
        [code: string]: number;
    };
}
export default OrderReducerStates;

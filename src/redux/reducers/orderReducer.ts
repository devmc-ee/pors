import AppActions from '../../types/redux/appActions';
import OrderReducerStates from '../../types/redux/reducers/orderReducerStates';
import { ORDER } from '../../dataSets/ACTION';

const order = localStorage.getItem('order');
const initState: OrderReducerStates = {
	order: !!order ? JSON.parse(order) : [],
};

const orderReducer = (state = initState, action: AppActions): OrderReducerStates => {
	switch (action.type) {
		case ORDER.ADD_TO_CART:
			return {
				...state,
				order: [...state.order, action.payload],
			};
		default:
			return state;
	}
};
export default orderReducer;

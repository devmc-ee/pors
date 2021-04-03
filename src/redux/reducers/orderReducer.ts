import AppActions from "../../types/redux/appActions";
import OrderReducerStates from "../../types/redux/reducers/orderReducerStates";
import { ORDER } from '../../dataSets/ACTION'
const initState: OrderReducerStates = {
    order: []
}

const orderReducer=(state = initState, action: AppActions)=>{
    switch(action.type){
        case ORDER.ADD_TO_CART:
            return {
                ...state,
                order: [...state.order, action.payload ]
            }
        default:
            return state;
    }
}
export default orderReducer;
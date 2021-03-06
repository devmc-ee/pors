import { combineReducers } from 'redux';
import AppActions from '../types/redux/appActions';
import orderReducer from './reducers/orderReducer';

const appReducer = combineReducers({
	orderStates: orderReducer,
});
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const rootReducer = (state: AppState | undefined, action: AppActions) => {
	if (action.type === 'ACTION.AUTH.LOGOUT') {
		// clear store
		state = undefined;
	}
	return appReducer(state, action);
};

export type AppState = ReturnType<typeof appReducer>;

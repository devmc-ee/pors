import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './redux/rootReducer';

const store = createStore(
    rootReducer,
    compose(
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            // @ts-ignore
            window.__REDUX_DEVTOOLS_EXTENSION__({
                trace: true,
            }),
    ),
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

store.subscribe(() => {
    const { order } = store.getState().orderStates;

    localStorage.setItem('order', JSON.stringify(order));
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

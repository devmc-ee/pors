import MainPage from './components/MainPage';
import MenuItemButton from './components/buttons/MenuItemButton';
import { MENU } from './__mock_data__/MENU';
import OrderList from './components/OrderList';
import CustomerCartButton from './components/buttons/CustomerCartButton';
import CheckoutTotalButton from './components/buttons/CheckoutTotalButton';

import './App.css';

function App(): JSX.Element {
    const keyboard = MENU.map((item) => <MenuItemButton key={item.code} {...item} />);

    return (
        <div className="App container-fluid">
            <MainPage
                keyboard={<div>{keyboard}</div>}
                customer={<CustomerCartButton />}
                order={<OrderList />}
                checkout={<CheckoutTotalButton />}
            />
        </div>
    );
}

export default App;

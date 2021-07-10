import MainPage from './pages/MainPage';
import MenuItemButton from './components/sharedElements/buttons/MenuItemButton';
import { MENU } from './__mock_data__/MENU';
import CustomerCartButton from './components/sharedElements/buttons/CustomerCartButton';
import CheckoutTotalButton from './components/sharedElements/buttons/CheckoutTotalButton';

import './App.css';
import OrderList from './components/blocks/OrderList';

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

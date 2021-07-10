import MainPage from './pages/MainPage';
import MenuItemButton from './components/blocks/MenuItemButton';
import { MENU } from './__mock_data__/MENU';
import CustomerCartButton from './components/blocks/CustomerCartButton';
import CheckoutTotalBlock from './components/blocks/CheckoutTotalBlock';

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
                checkout={<CheckoutTotalBlock />}
            />
        </div>
    );
}

export default App;

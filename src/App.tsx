import MainPage from './components/MainPage';
import MenuItemButton from './components/MenuItemButton';
import { MENU } from './__mock_data__/MENU';
import OrderList from './components/OrderList';
import CustomerCartButton from './components/CustomerCartButton';

import './App.css';

function App(): JSX.Element {
    const keyboard = MENU.map((item) => <MenuItemButton key={item.code} {...item} />);

    return (
        <div className="App ">
            <div className="row">
                <div className="col s12">
                    <MainPage
                        keyboard={<div>{keyboard}</div>}
                        customer={<CustomerCartButton />}
                        order={<OrderList />}
                        checkout={<>checkout</>}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

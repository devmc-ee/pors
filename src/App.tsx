import './App.css';
import MainPage from './components/MainPage';
import MenuItemButton from './components/MenuItemButton';
import { MENU } from './__mock_data__/MENU';
import { useSelector } from 'react-redux';
import { AppState } from './redux/rootReducer';
import CustomerCartButton from './components/CustomerCartButton'

function App() {


  const keyboard = MENU.map((item) => <MenuItemButton key={item.code} {...item} />);
  const { order } = useSelector(({ order }: AppState) => order);
  let orderList = [];

  for (let item in order) {
    orderList.push(<div key={item}>{item}:{order[item]}</div>)
  }

  return (
    <div className="App">

      <div className="container-fluid">
        <MainPage
          keyboard={<div>{keyboard}</div>} customer={<CustomerCartButton />} order={<>{orderList}</>} checkout={<>checkout</>} />
      </div>
    </div>
  );
}

export default App;

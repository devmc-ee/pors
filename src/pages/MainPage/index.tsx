import './styles/MainPage.css';

const MainPage: MainPage = ({ keyboard, order, checkout, customer }: MainPageProps) => {
    return (
        <div className="main-page main-page__container">
            <div className="main-page__keyboard-area">{keyboard}</div>
            <div className="main-page__cart-area ">
                <div className="main-page__customer-info">{customer}</div>
                <div className="main-page__order-area">{order}</div>
                <div className="main-page__checkout-btns">{checkout}</div>
            </div>
        </div>
    );
};
export default MainPage;

type MainPage = (props: MainPageProps) => JSX.Element;
type MainPageProps = {
    keyboard: JSX.Element | JSX.Element[];
    order: JSX.Element | JSX.Element[];
    checkout: JSX.Element | JSX.Element[];
    customer: JSX.Element | JSX.Element[];
};

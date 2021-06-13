import { InlineIcon } from '@iconify/react';
import contactCard20Regular from '@iconify/icons-fluent/contact-card-20-regular';

import './styles/CustomerCartButton.css';

const CustomerCartButton = () => {
    const customerName = 'Private Person';
    return (
        <div className="cart-customer-card">
            <button className="cart-customer-card__btn">
                <InlineIcon className="cart-customer-card__icon" icon={contactCard20Regular} />
                <span className="cart-customer-card__name">{customerName}</span>
            </button>
        </div>
    );
};
export default CustomerCartButton;

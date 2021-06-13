import { PaymentMethodButton } from '../../../types/paymentMethod';
import Button from '../Button';

const PaymentButton = ({ type, icon, name, description, onClick }: PaymentMethodButton): JSX.Element => {
    const Icon = () => (icon ? icon : <></>);
    return (
        <Button
            key={type}
            value={type}
            onClick={onClick}
            classes={'payment-method-button payment-method-button__' + type}
        >
            <>
                <div className={'payment-method-button__icon-title'}>
                    {/*@ts-ignore*/}
                    {icon ? <Icon /> : <span className={'payment-method-button__title'}> {name}</span>}
                </div>
                <span className={'payment-method-button__description'}>{description}</span>
            </>
        </Button>
    );
};
export default PaymentButton;

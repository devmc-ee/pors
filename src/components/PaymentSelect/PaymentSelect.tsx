import { PaymentMethod } from '../../types/paymentMethod';
import PaymentButton from '../PaymentButton';
import styles from './PaymentSelect.module.css';
import { ReactComponent as BoltLogo } from '../../assets/icons/paymentMethods/Bolt_Logo_green.svg';
import { ReactComponent as WoltLogo } from '../../assets/icons/paymentMethods/wolt_logo.svg';

interface PaymentSelectProp {
    onClick: () => void;
}

const PAYMENT_METHODS: PaymentMethod[] = [
    {
        type: 'cash',
        name: 'Cash',
        description: 'Only cash',
        icon: null,
    },
    {
        type: 'card',
        name: 'Card',
        description: 'only card',
        icon: null,
    },
    {
        type: 'mixed',
        name: 'Mixed',
        description: 'part with cash, part with card',
        icon: null,
    },
    {
        type: 'bolt',
        name: 'Bolt',
        description: 'Order from Bolt, paid with Bolt',
        icon: <BoltLogo className="payment-method-button__icon" />,
    },
    {
        type: 'wolt',
        name: 'Wolt',
        description: 'Order from Wolt, paid with Wolt',
        icon: <WoltLogo className="payment-method-button__icon" />,
    },
];

const PaymentSelect = ({ onClick }: PaymentSelectProp): JSX.Element => {
    const paymentButton = ({ type, ...rest }: PaymentMethod) => <PaymentButton {...rest} type={type} key={type} />;
    return (
        <div className={styles.container}>
            <div className={styles.overlay} onClick={onClick} />
            <div className={styles.content}>
                <div className={styles.header}>Select payment method</div>
                <div className={styles.body}>{PAYMENT_METHODS.map(paymentButton)}</div>
            </div>
        </div>
    );
};
export default PaymentSelect;

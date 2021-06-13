import { PaymentMethod } from '../../../types/paymentMethod';
import PaymentButton from '../../buttons/PaymentButton';
import styles from './PaymentSelect.module.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Portal from '../../portals/Portal';

interface PaymentSelectProp {
    onClick: () => void;
}

const PAYMENT_METHODS: PaymentMethod[] = [
    {
        type: 'cash',
        name: 'Cash',
        description: 'Only cash',
    },
    {
        type: 'card',
        name: 'Card',
        description: 'only card',
    },
    {
        type: 'mixed',
        name: 'Mixed',
        description: 'part with cash, part with card',
    },
    {
        type: 'bolt',
        name: 'Bolt',
        description: 'Order from Bolt, paid with Bolt',
    },
    {
        type: 'wolt',
        name: 'Wolt',
        description: 'Order from Wolt, paid with Wolt',
    },
];

const PaymentSelect = ({ onClick }: PaymentSelectProp): JSX.Element => {
    const { t } = useTranslation();
    const [context, set] = useState<string | null>(null);

    const handleContext = (context: string) => {
        set(() => context);
    };

    const paymentButton = ({ type, ...rest }: PaymentMethod) => (
        <PaymentButton onClick={() => handleContext(type)} {...rest} type={type} key={type} />
    );
    return (
        <>
            <div className={styles.container}>
                <div className={styles.overlay} onClick={onClick} />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <span>{t('paymentSelect.header')}</span> <button onClick={onClick}>x</button>
                    </div>
                    <div className={styles.body}>{PAYMENT_METHODS.map(paymentButton)}</div>
                </div>
            </div>
            {context && (
                <Portal id={`payment-method--${context}`}>
                    <> {context}</>
                </Portal>
            )}
        </>
    );
};

export default PaymentSelect;

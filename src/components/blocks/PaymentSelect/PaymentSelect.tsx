import { PaymentMethod } from '../../../types/paymentMethod';
import PaymentButton from '../../sharedElements/buttons/PaymentButton';
import styles from './PaymentSelect.module.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalWindow from '../../portals/ModalWindow';

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

const PaymentSelect = (): JSX.Element => {
    const { t } = useTranslation();
    const [context, set] = useState<string | null>(null);
    const [isOpen, setOpen] = useState(false);

    const handleContext = (context: string) => {
        set(() => context);
    };
    const handleOpen = () => {
        setOpen((prev) => !prev);
    };
    useEffect(() => {
        if (!!context) handleOpen();
    }, [context]);

    const paymentButton = ({ type, ...rest }: PaymentMethod) => (
        <PaymentButton onClick={() => handleContext(type)} {...rest} type={type} key={type} />
    );
    return (
        <>
            <div className={styles.content}>
                <div className={styles.body}>{PAYMENT_METHODS.map(paymentButton)}</div>
            </div>

            <ModalWindow
                isOpen={isOpen}
                handleOpen={handleOpen}
                id={`payment-method--${context}`}
                headerText={`${t('paymentSelect.paymentMethodModal.header')}: ${context?.toUpperCase()}`}
            >
                <> {context}</>
            </ModalWindow>
        </>
    );
};

export default PaymentSelect;

import { useTranslation } from 'react-i18next';
import { BemStructure } from '../../../types/BemStructure';
import { getBemClasses } from '../../../utils/classesUtils';
import CashKeyboard from '../CashKeyboard';
import CashPaymentInfo from './CashPaymentInfo';

interface CashPaymentRegisterBlockProps {
    dueToPayLabel?: string;
    dueToChangeLabel?: string;
}
const CashPaymentRegisterBlock = ({ dueToPayLabel = '', dueToChangeLabel = '' }: CashPaymentRegisterBlockProps) => {
    const { t } = useTranslation();
    const bem: BemStructure = {
        block: 'cash-payment-register-block',
        container: 'container',
        blockArea: 'block-area',
        paymentView: 'payment-view',
        paymentViewDueTo: 'payment-view-due-to',
        paymentViewCustomerPaid: 'payment-view-customer-paid',
        paymentViewDueToChange: 'payment-view-due-to-change',
        paymentCashKeyboard: 'payment-cash-keyboard',
        footer: 'footer',
    };
    const classes = getBemClasses(bem);

    const dueToPayArgs = {
        labelText: !!dueToPayLabel ? dueToPayLabel : t('cashPaymentRegister.dueToPay.label'),
        value: ' 10€',
    };
    const dueToChangeArgs = {
        labelText: dueToChangeLabel? dueToChangeLabel: t('cashPaymentRegister.dueToChange.label'),
        value: ' 10€',
    };
    return (
        <div className={classes?.block}>
            <div className={classes?.container}>
                <div className={`${classes?.paymentView} ${classes?.blockArea}`}>
                    <div className={classes?.paymentViewDueTo}>
                        <CashPaymentInfo {...dueToPayArgs} />
                    </div>
                    <div className={classes?.paymentViewCustomerPaid}>paymentViewCustomerPaid</div>
                    <div className={classes?.paymentViewDueToChange}>
                        <CashPaymentInfo {...dueToChangeArgs} />
                    </div>
                </div>
                <div className={`${classes?.paymentCashKeyboard} ${classes?.blockArea}`}>
                    <CashKeyboard />
                </div>
            </div>
            <div className={classes?.footer}>Footer</div>
        </div>
    );
};
export default CashPaymentRegisterBlock;

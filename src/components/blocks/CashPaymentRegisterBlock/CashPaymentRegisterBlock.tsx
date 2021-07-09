import { BemStructure } from '../../../types/BemStructure';
import { getBemClasses } from '../../../utils/classesUtils';
import CashKeyboard from '../../sets/CashKeyboard';

const CashPaymentRegisterBlock = () => {
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

    return (
        <div className={classes?.block}>
            <div className={classes?.container}>
                <div className={`${classes?.paymentView} ${classes?.blockArea}`}>
                    <div className={classes?.paymentViewDueTo}>paymentViewDueTo</div>
                    <div className={classes?.paymentViewCustomerPaid}>paymentViewCustomerPaid</div>
                    <div className={classes?.paymentViewDueToChange}>paymentViewDueToChange</div>
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

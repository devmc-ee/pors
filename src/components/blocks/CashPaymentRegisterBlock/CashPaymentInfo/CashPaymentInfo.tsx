import { getBemClasses } from '../../../../utils/classesUtils';

export interface CashPaymentInfoProps {
    labelText: string;
    value: string;
    customBlockClass?: string;
}
const CashPaymentInfo = ({ labelText, value, customBlockClass = '' }: CashPaymentInfoProps) => {
    const bem = {
        block: 'cash-payment-view',
        container: 'container',
        textElement: 'text-element',
        label: 'label',
        value: 'value',
    };
    const classes = getBemClasses(bem, customBlockClass);
    return (
        <div className={classes?.block}>
            <div className={classes?.container}>
                <span className={`${classes?.label} ${classes?.textElement}`}>{labelText}:</span>
                <span className={`${classes?.value} ${classes?.textElement}`}>{value}</span>
            </div>
        </div>
    );
};
export default CashPaymentInfo;

import { BemStructure } from '../../../types/BemStructure';
import { getBemClasses } from '../../../utils/classesUtils';

const PaymentRegister = (): JSX.Element => {
    const bem: BemStructure = {
        block: 'payment-register-block',
        container: 'container',
    };
    const classes = getBemClasses(bem);
    return <div className={classes?.block}>PaymentRegister</div>;
};
export default PaymentRegister;

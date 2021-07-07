import { BemStructure } from '../../../types/BemStructure';
import { getBemClasses } from '../../../utils/classesUtils';

export interface PaymentRegisterProps {
    context: string;
}
const PaymentRegister = ({ context }: PaymentRegisterProps): JSX.Element => {
    const bem: BemStructure = {
        block: 'payment-register-block',
        container: 'container',
    };
    const classes = getBemClasses(bem);
    return <div className={classes?.block}>PaymentRegister</div>;
};
export default PaymentRegister;

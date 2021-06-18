import { CASH_KEYBOARD } from '../../../dataSets/CASH_KEYBOARD';
import { KeyboardValue } from '../../../types/cashKeyBoard';
import Button from '../../buttons/Button';

const CashKeyboard = (): JSX.Element => {
    const addCash = (value: string | number) => console.log(value);
    const cashButton = ({ name, value }: KeyboardValue) => (
        <Button value={value} onClick={() => addCash(value)}>
            {name}
        </Button>
    );
    return <div>{CASH_KEYBOARD.map(cashButton)}</div>;
};
export default CashKeyboard;

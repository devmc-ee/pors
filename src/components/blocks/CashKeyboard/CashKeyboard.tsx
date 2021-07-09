import { MouseEvent } from 'react';
import { CASH_KEYBOARD } from '../../../dataSets/CASH_KEYBOARD';
import { KeyboardValue } from '../../../types/cashKeyBoard';
import CashButton from '../../buttons/CashButton';

const CashKeyboard = (): JSX.Element => {
    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.value);
    };
    const cashButton = ({ name, value }: KeyboardValue) => <CashButton value={value} onClick={onClick} label={name} />;

    return (
        <div className="cash-keyboard">
            <div className="cash-keyboard__container">{CASH_KEYBOARD.map(cashButton)}</div>
        </div>
    );
};
export default CashKeyboard;

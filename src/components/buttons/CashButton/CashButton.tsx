import { MouseEvent } from 'react';
interface CashButtonProps {
    label: string;
    value: string | number;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
const CashButton = ({ label, value, onClick }: CashButtonProps): JSX.Element => {
    return (
        <button className="cash-button" value={value} onClick={onClick}>
            {label}
        </button>
    );
};
export default CashButton;

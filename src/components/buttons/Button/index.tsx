import { SyntheticEvent } from 'react';

export interface IButton {
    classes?: string;
    value: number | string;
    onClick: (event: SyntheticEvent) => void;
    children: JSX.Element | string;
}
const Button = ({ classes = '', children, onClick, value = 0 }: IButton) => {
    return (
        <button className={'button ' + classes} data-value={value} onClick={onClick}>
            {children}
        </button>
    );
};
export default Button;

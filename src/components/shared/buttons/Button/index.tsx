export interface IButton {
    classes?: string;
    value: number | string;
    onClick: () => void;
    children: JSX.Element | JSX.Element[] | string;
}

const Button = ({ classes = '', children, onClick, value = 0 }: IButton): JSX.Element => {
    return (
        <button className={'button ' + classes} data-value={value} onClick={onClick}>
            {children}
        </button>
    );
};
export default Button;

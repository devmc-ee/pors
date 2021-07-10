import { PaymentMethodButton } from '../../../../types/paymentMethod';

import { capitalize } from '../../../../utils/stringUtils';
import useIcons from '../../../../hooks/useIcons';

import Button from '../../../shared/buttons/Button';
import Icon from '../../../shared/icons/Icon';

const PaymentButton = ({ type, name, description, onClick }: PaymentMethodButton): JSX.Element => {
    const iconName = !!type ? capitalize(type) : false;
    const { hasIcon } = useIcons();

    return (
        <Button
            key={type}
            value={type}
            onClick={onClick}
            classes={'payment-method-button payment-method-button__' + type}
        >
            <div className={'payment-method-button__icon-title'}>
                {!!iconName && hasIcon(iconName as string) ? (
                    <Icon name={iconName as string} />
                ) : (
                    <span className={'payment-method-button__title'}> {name}</span>
                )}
            </div>
            <span className={'payment-method-button__description'}>{description}</span>
        </Button>
    );
};
export default PaymentButton;

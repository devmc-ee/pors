import { Meta, Story } from '@storybook/react/types-6-0';
import CashPaymentInfo from '.';
import { CashPaymentInfoProps } from './CashPaymentInfo';

export default {
    title: 'Blocks/CashPaymentInfo',
    component: CashPaymentInfo,
} as Meta;

const Template: Story<CashPaymentInfoProps> = (args) => <CashPaymentInfo {...args} />;

export const PaymentDueTo = Template.bind({});
PaymentDueTo.args = {
    labelText: 'Due to pay',
    value: '10.00€',
};

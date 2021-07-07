import { Meta, Story } from '@storybook/react/types-6-0';
import PaymentRegister from '.';
import { PaymentRegisterProps } from './PaymentRegister';

export default {
    title: 'Blocks/PaymentRegister',
    component: PaymentRegister,
    args: {
        context: '',
    },
} as Meta;

const Template: Story<PaymentRegisterProps> = (args) => <PaymentRegister {...args} />;
export const CashPayment = Template.bind({});
CashPayment.args = {
    context: 'cash',
};

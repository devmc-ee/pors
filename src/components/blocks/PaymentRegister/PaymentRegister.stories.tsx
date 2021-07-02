import { Meta, Story } from '@storybook/react/types-6-0';
import PaymentRegister from '.';

export default {
    title: 'Block/PaymentRegister',
    component: PaymentRegister,
} as Meta;

const Template: Story = () => <PaymentRegister />;
export const CashPayment = Template.bind({});

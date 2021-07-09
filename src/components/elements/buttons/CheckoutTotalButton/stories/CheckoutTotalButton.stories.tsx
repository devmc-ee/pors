import { CheckoutButton } from '../index';
import { CheckoutButtonProps } from '../CheckoutButton';
import { Meta, Story } from '@storybook/react/types-6-0';
import '../../../../App.css';

export default {
    title: 'Cart Area/Checkout total button',
    component: CheckoutButton,
    args: {
        totalSum: 100,
        onClick: () => null,
    },
} as Meta;

const Template: Story<CheckoutButtonProps> = (args) => <CheckoutButton {...args} />;
export const Default = Template.bind({});

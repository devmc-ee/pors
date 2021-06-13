import CheckoutTotalButton from '..';
import { Meta, Story } from '@storybook/react/types-6-0';
import '../../../App.css';

export default {
    title: 'Cart Area/Checkout total button',
    component: CheckoutTotalButton,
} as Meta;

const Template: Story = (args) => <CheckoutTotalButton />;
export const Default = Template.bind({});

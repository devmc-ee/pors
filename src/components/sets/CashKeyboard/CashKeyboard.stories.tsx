import { Meta, Story } from '@storybook/react/types-6-0';
import CashKeyboard from '.';

export default {
    title: 'Sets/CashKeyboard',
    component: CashKeyboard,
} as Meta;

const Template: Story = () => <CashKeyboard />;

export const Default = Template.bind({});

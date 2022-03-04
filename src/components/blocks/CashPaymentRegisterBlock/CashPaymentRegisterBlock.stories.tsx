import { Meta, Story } from '@storybook/react/types-6-0';
import CashPaymentRegisterBlock from '.';

export default {
    title: 'Blocks/CashPaymentRegisterBlock',
    component: CashPaymentRegisterBlock,
} as Meta;

const Template: Story = (args) => <CashPaymentRegisterBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
    dueToPayLabel: 'due To Pay',
    dueToChangeLabel: 'due To Change',
};

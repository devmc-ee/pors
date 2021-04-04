import CustomerCartButton from '../.';
import { Meta, Story} from '@storybook/react/types-6-0'

export default {
    title: 'Cart Area/Customer block',
    component: CustomerCartButton,
    
} as Meta; 

const Template: Story = (args) => <CustomerCartButton />
export const Default = Template.bind({});
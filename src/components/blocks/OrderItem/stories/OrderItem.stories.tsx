import { Meta, Story } from '@storybook/react/types-6-0';
import { CURRENCY } from '../../../dataSets/CURRENCY';
import { OrderedItemType } from '../../../types/order';
import OrderItem from '../OrderItem';

export default {
    title: 'Cart Area/Order Item',
    componet: OrderItem,
    args: {
        name: '',
        code: '',
        price: '',
        currencySymbol: '',
        amount: '',
        sum: '',
    },
} as Meta;

const Template: Story<OrderedItemType> = (args) => <OrderItem {...args} />;
export const Default = Template.bind({});
Default.args = {
    name: 'Braised Pork Noodle Soup',
    code: '1',
    price: 10,
    currencySymbol: CURRENCY.EUR.symbol,
    amount: 2,
};

import { MenuItem } from '../MenuButton';
import { Meta, Story } from '@storybook/react/types-6-0';
import { CURRENCY } from '../../../../../dataSets/CURRENCY';
import { MenuButtonProps } from '../../../../../types/button';

export default {
    title: 'Buttons/MenuItemButton',
    component: MenuItem,
    args: {
        code: '1',
        name: 'Braised Pork Noodle Soup',
        price: 7,
        currencySymbol: CURRENCY.EUR.symbol,
        addedToCartAmount: 0,
        onClick: () => null,
    },
} as Meta;

const Template: Story<MenuButtonProps> = (args) => <MenuItem {...args} />;
export const Default = Template.bind({});

export const AddedOneItem = Template.bind({});
AddedOneItem.args = {
    addedToCartAmount: 1,
};

import MenuItemButton from '../';
import { Meta, Story } from '@storybook/react/types-6-0';
import { CURRENCY } from '../../../dataSets/CURRENCY';
import { MenuItemButtonType } from '../../../types/button';
export default {
    title: 'MenuItemButton',
    component: MenuItemButton,
    args: {
        code: '1',
        name: 'Braised Pork Noodle Soup',
        price: 7,
        currencySymbol: CURRENCY.EUR.symbol,
    },
} as Meta;

const Template: Story<MenuItemButtonType> = (args) => <MenuItemButton {...args} />;
export const Default = Template.bind({});

export const AddedOneItem = Template.bind({});

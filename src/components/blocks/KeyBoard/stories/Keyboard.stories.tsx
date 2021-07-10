import KeyBoard, { KeyboardProps } from '../KeyBoard';
import { Meta, Story } from '@storybook/react/types-6-0';
import { CURRENCY } from '../../../../dataSets/CURRENCY';
import { MenuItem } from '../../../shared/buttons/MenuItemButton';
export default {
    title: 'KeyBoard',
    component: KeyBoard,
    args: {
        menuData: [],
        menuItemButton: MenuItem,
    },
} as Meta;

const Template: Story<KeyboardProps> = (args) => {
    return <KeyBoard {...args} />;
};
export const Default = Template.bind({});
Default.args = {
    menuData: [
        {
            code: 'TF1',
            menuNumber: '1',
            name: 'BRAISED PORK NOODLE SOUP',
            price: 6,
            currencySymbol: CURRENCY.EUR.symbol,
        },
        {
            menuNumber: '2',
            code: 'TF2',
            name: 'BRAISED PORK SOUP',
            price: 10,
            currencySymbol: CURRENCY.EUR.symbol,
        },
        {
            menuNumber: '3',
            code: 'TF3',
            name: 'RICE PORK SOUP',
            price: 5,
            currencySymbol: CURRENCY.EUR.symbol,
        },
    ],
};

import KeyBoard, { KeyboardProps } from '../KeyBoard';
import { Meta, Story } from '@storybook/react/types-6-0';
import { CURRENCY } from '../../../dataSets/CURRENCY';
export default {
    title: 'KeyBoard',
    component: KeyBoard,
    args: {
        menuData: []
    }
} as Meta;

const Template: Story<KeyboardProps> = (args) => <KeyBoard {...args} />;
export const Default = Template.bind({});
Default.args = {
    menuData: [{ 
        code: '1',
        name: 'Braised Pork Noodle Soup',
        price: 7,
        currencySymbol: CURRENCY.EUR.symbol,
    }, 
    { 
        code: '2',
        name: 'Braised Pork Noodle Soup',
        price: 17,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    { 
        code: '3',
        name: 'Braised Pork Noodle Soup',
        price: 27,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    ]
}


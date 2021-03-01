import React from 'react';
import MenuItemButton, {IMenuItemButton} from '../'
import { Meta, Story } from  '@storybook/react/types-6-0';
export default {
    title: 'MenuItemButton',
    component: MenuItemButton,
    args: {
        itemNumber: 1,
        itemName: 'Braised Pork Noodle Soup',
        itemPrice: '7€',
        itemAddedQuantity: 0
    }
} as Meta; 

const Template: Story<IMenuItemButton> = (args) => <MenuItemButton {...args} />;
export const Default = Template.bind({});

export const AddedOneItem = Template.bind({});
AddedOneItem.args={
    ...AddedOneItem.args,
    itemAddedQuantity: 1
}
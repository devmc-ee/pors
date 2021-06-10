import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { IButton } from '..';

export default {
    title: 'Buttons/Simple Button',
    component: Button,
} as Meta;

const Template: Story<IButton> = (args) => {
    return <Button {...args}>Button</Button>;
};
export const Default = Template.bind({});

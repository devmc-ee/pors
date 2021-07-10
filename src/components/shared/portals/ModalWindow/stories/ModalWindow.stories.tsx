import { Meta, Story } from '@storybook/react/types-6-0';
import { useState } from 'react';
import ModalWindow from '../ModalWindow';

export default {
    title: 'Portals/ModalWindow',
    component: ModalWindow,
    args: {},
} as Meta;

const Template: Story = (args) => {
    const [open, set] = useState(false);
    const handleOpen = () => set((prev) => !prev);
    const newArgs = {
        ...args,
        id: 'storybook',
        handleOpen,
        isOpen: open,
    };
    return (
        <>
            <button onClick={handleOpen}>Toggle</button>
            <ModalWindow {...newArgs}>
                <div>Modal</div>
            </ModalWindow>
        </>
    );
};

export const Default: Story = Template.bind({});
export const WithHeader: Story = Template.bind({});
WithHeader.args = {
    headerText: 'Header',
};

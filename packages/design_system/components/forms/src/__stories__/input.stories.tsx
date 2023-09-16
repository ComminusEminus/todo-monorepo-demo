import type { Meta, StoryObj } from '@storybook/react';
import {Input as InputComponent} from '../presentation/Input'

const meta: Meta<typeof InputComponent> = {
    //title: 'design_system/Container',
    component: InputComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof InputComponent>

//background colored so it displays default is transparent 
export const Input: Story = {
    args:{
        placeholder: 'Write here',
        name: 'TestInput',
        register: () => {}
    }
}


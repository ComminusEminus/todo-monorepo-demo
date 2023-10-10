import type { Meta, StoryObj } from '@storybook/react';
import {Button as ButtonComponent} from '../presentation/Button'

const meta: Meta<typeof ButtonComponent> = {
    //title: 'design_system/Container',
    component: ButtonComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof ButtonComponent>

export const ButtonPrimarySm: Story = {
    args:{
        text: 'Button',
        size: 'sm',
        buttonStyle: 'primary',
    }
}

export const ButtonPrimaryLg: Story = {
    args:{
        text: 'Button',
        buttonStyle: 'primary',
        size: 'lg',
        
    }
}


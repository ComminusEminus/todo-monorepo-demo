import type { Meta, StoryObj } from '@storybook/react';
import {TextButton as TextButtonComponent} from '../presentation/TextButton'

const meta: Meta<typeof TextButtonComponent> = {
    //title: 'design_system/Container',
    component: TextButtonComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof TextButtonComponent>

export const TextButtonPrimarySm: Story = {
    args:{
        text: 'Button',
        size: 'sm',
        buttonStyle: 'primary',
        
    }
}

export const ButtonPrimaryLg: Story = {
    args:{
        text: 'Button',
        size: 'lg',
        buttonStyle: 'primary',
        
    }
}


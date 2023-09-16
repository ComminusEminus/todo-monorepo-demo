import type { Meta, StoryObj } from '@storybook/react';
import {OutlineButton as OutlineButtonComponent} from '../presentation/OutlineButton'

const meta: Meta<typeof OutlineButtonComponent> = {
    //title: 'design_system/Container',
    component: OutlineButtonComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof OutlineButtonComponent>

export const OutlineButtonPrimarySm: Story = {
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


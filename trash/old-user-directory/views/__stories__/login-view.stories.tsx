import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {LoginView as LoginViewComponent} from '../login-view'
import {UIProvider, ListItemProvider} from '@ui/contexts'
import {CompleteState} from '@core/entities'
const meta: Meta<typeof LoginViewComponent> = {
    //title: 'design_system/Container',
    component: LoginViewComponent,
    tags: ['autodocs'],
    
}

export default meta;

type Story = StoryObj<typeof LoginViewComponent>

export const LoginView: Story = {
    args:{},
    decorators: [
        (Story) => (
            <UIProvider>
                <Story />
            </UIProvider>
        ),
    ]
}

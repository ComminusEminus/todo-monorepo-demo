import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {LoginUserPresentation as LoginUserComponent} from '../login-user-presentation'
import {UIProvider, ListItemProvider} from '@ui/contexts'
import {CompleteState} from '@core/entities'
const meta: Meta<typeof LoginUserComponent> = {
    //title: 'design_system/Container',
    component: LoginUserComponent,
    tags: ['autodocs'],
    
}

export default meta;

type Story = StoryObj<typeof LoginUserComponent>

export const LoginUserPresentation: Story = {
    args:{},
    decorators: [
        (Story) => (
            <UIProvider>
                <Story />
            </UIProvider>
        ),
    ]
}

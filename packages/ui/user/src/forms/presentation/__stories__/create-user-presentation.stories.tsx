import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {CreateUserPresentation as CreateUserFormComponent} from '../create-user-presentation'
import {UIProvider, ListItemProvider} from '@ui/contexts'
import {CompleteState} from '@core/entities'
const meta: Meta<typeof CreateUserFormComponent> = {
    //title: 'design_system/Container',
    component: CreateUserFormComponent,
    tags: ['autodocs'],
    
}

export default meta;

type Story = StoryObj<typeof CreateUserFormComponent>

export const CreateUserPresentation: Story = {
    args:{},
    decorators: [
        (Story) => (
            <UIProvider>
                <Story />
            </UIProvider>
        ),
    ]
}

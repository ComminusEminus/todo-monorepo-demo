import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {CreateNewUserView as CreateUserViewComponent} from '../create-new-user-view'
import {UIProvider, ListItemProvider} from '@ui/contexts'
import {CompleteState} from '@core/entities'
const meta: Meta<typeof CreateUserViewComponent> = {
    //title: 'design_system/Container',
    component: CreateUserViewComponent,
    tags: ['autodocs'],
    
}

export default meta;

type Story = StoryObj<typeof CreateUserViewComponent>

export const CreateNewUserView: Story = {
    args:{},
    decorators: [
        (Story) => (
            <UIProvider>
                <Story />
            </UIProvider>
        ),
    ]
}

import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {AddNewTodoListItemFormPresentation as AddNewFormComponent} from '../addnew-todo-list-item-form-presentation'
import {UIProvider, ListItemProvider} from '@ui/contexts'
import {CompleteState} from '@core/entities'
const meta: Meta<typeof AddNewFormComponent> = {
    //title: 'design_system/Container',
    component: AddNewFormComponent,
    tags: ['autodocs'],
    
}

export default meta;

type Story = StoryObj<typeof AddNewFormComponent>

export const AddNewTodoListItemFormPresentation: Story = {
    args:{},
    decorators: [
        (Story) => (
            <UIProvider>
                <Story />
            </UIProvider>
        ),
    ]
}

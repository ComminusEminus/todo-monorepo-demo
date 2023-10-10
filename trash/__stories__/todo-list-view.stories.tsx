import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import { TodoListView as TodoListViewComponent } from '../todo-list-view'
import { UIProvider, ListItemProvider } from '@ui/contexts'
import { CompleteState } from '@core/entities'
const meta: Meta<typeof TodoListViewComponent> = {
    //title: 'design_system/Container',
    component: TodoListViewComponent,
    tags: ['autodocs'],

}

export default meta;

type Story = StoryObj<typeof TodoListViewComponent>

export const TodoListView: Story = {
    args: {},
    decorators: [
        (Story) => (
            <UIProvider
                defaultState = {
                    {
                        formType: null,
                        selectedTodoListItemId: '32423',
                        selectedTodoListId: '234442',
                        update: null,
                    }
                }
            >
                <Story />
            </UIProvider>
        ),
    ]
}

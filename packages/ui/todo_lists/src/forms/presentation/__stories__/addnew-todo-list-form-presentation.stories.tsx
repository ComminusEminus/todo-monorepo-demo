import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {AddNewTodoListFormPresentation as AddNewFormComponent} from '../addnew-todo-list-form-presentation'
import {UIProvider, ListItemProvider} from '@ui/contexts'
import {CompleteState, IMappedUserProfile, IUIDefaultState, FormType} from '@core/entities'

const mockUserProfile: IMappedUserProfile = {
    _id: '2234234',
    userName: 'JDoe',
    firstName: 'John',
    lastName: 'Does',
}

const mockDefaultUIState :  IUIDefaultState = {
    formType: FormType.NEW_TODOLIST,
    selectedTodoListItemId: null,
    selectedTodoListId: null,
    update: null,
    userProfile: mockUserProfile,
}

const meta: Meta<typeof AddNewFormComponent> = {
    //title: 'design_system/Container',
    component: AddNewFormComponent,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <UIProvider
                defaultState={mockDefaultUIState}
            >
                <Story />
            </UIProvider>
        ),
    ]
}

export default meta;

type Story = StoryObj<typeof AddNewFormComponent>

export const AddNewTodoListFormPresentation: Story = {
    args:{},
}

import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {FormDisplayView as FormDisplayComponent} from '../form-display-view'
import {UIProvider} from '@ui/contexts'
import {CompleteState, IMappedUserProfile, IUIDefaultState, FormType} from '@core/entities'

const mockUserProfile: IMappedUserProfile = {
    _id: '2234234',
    userName: 'JDoe',
    firstName: 'John',
    lastName: 'Does',
}

const mockDefaultUIState :  any = {
    formType: FormType.NEW_TODOLIST,
    selectedTodoListItemId: null,
    selectedTodoListId: null,
    update: null,
    userProfile: mockUserProfile,
}
const mockNewTodoListFormUIState :  IUIDefaultState = {
    ...mockDefaultUIState,
    formType: FormType.NEW_TODOLIST
}
const mockNewTodoListItemFormUIState :  IUIDefaultState = {
    ...mockDefaultUIState,
    formType: FormType.NEW_TODOLIST_ITEM
}
const meta: Meta<typeof FormDisplayComponent> = {
    //title: 'design_system/Container',
    component: FormDisplayComponent,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof FormDisplayComponent>

export const FormDisplayView_NewTodoList: Story = {
    args:{},
    decorators: [
        (Story) => (
            <UIProvider
                defaultState={mockNewTodoListFormUIState}
            >
                <Story />
            </UIProvider>
        ),
    ]
}

export const FormDisplayView_NewTodoListItem: Story = {
    args:{},
    decorators: [
        (Story) => (
            <UIProvider
                defaultState={mockNewTodoListItemFormUIState}
            >
                <Story />
            </UIProvider>
        ),
    ]
}

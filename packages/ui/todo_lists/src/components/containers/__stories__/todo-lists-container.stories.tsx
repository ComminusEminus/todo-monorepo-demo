import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {TodoListsContainer as ListsContainerComponent } from '../todo-lists-container'
import { Container } from '@design/container'
import {UIProvider, ListsProvider} from '@ui/contexts'
import {CompleteState, IMappedUserProfile, IUIDefaultState, FormType, VisibilityState, ITodoList, ITodoListItem } from '@core/entities'

const itemOneA: ITodoListItem = {
    _id: '2342342',
    title: 'ListItemOneA',
    description: 'ItemOneDescriptionA',
    complete: CompleteState.INCOMPLETE
}

const itemTwoA: ITodoListItem = {
    _id: '345345',
    title: 'ListItemTwoA',
    description: 'ItemTwoDescriptionA',
    complete: CompleteState.INCOMPLETE
}

const listItemsOne : ITodoListItem[] = [itemOneA, itemTwoA]

const mockListOne: ITodoList = {
    _id: '09090777',
    title: 'Unselected List',
    listItems:listItemsOne
}

const itemOneB: ITodoListItem = {
    _id: '899789',
    title: 'ListItemOneB',
    description: 'ItemOneDescriptionB',
    complete: CompleteState.INCOMPLETE
}

const itemTwoB: ITodoListItem = {
    _id: '97898789',
    title: 'ListItemTwoB',
    description: 'ItemTwoDescriptionB',
    complete: CompleteState.INCOMPLETE
}

const listItemsTwo : ITodoListItem[] = [itemOneB, itemTwoB]

const mockListTwo: ITodoList = {
    _id: '56456456465',
    title: 'Selected List',
    listItems:listItemsOne
}

const mockAllLists: any = [mockListOne, mockListTwo]

const mockUserProfile: IMappedUserProfile = {
    _id: '2234234',
    userName: 'JDoe',
    firstName: 'John',
    lastName: 'Does',
}

const mockDefaultUIState :  IUIDefaultState = {
    formType: null,
    selectedTodoListItemId: null,
    selectedTodoListId: '56456456465',
    update: null,
    userProfile: mockUserProfile,
}


const meta: Meta<typeof ListsContainerComponent> = {
    //title: 'design_system/Container',
    component: ListsContainerComponent,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <UIProvider
                defaultState = {mockDefaultUIState}
            >   
                 <Story />
            </UIProvider>
        ),
    ],
}


export default meta;

type Story = StoryObj<typeof ListsContainerComponent>

export const TodoListsContainer: Story = {
    args:{
        allTodoLists: mockAllLists,
        loading: false,
        errorMessage: null,
    }
}

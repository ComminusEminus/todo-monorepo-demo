import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {TodoListsView as ListsViewComponent } from '../todo-lists-view'
import { Container } from '@design/container'
import {UIProvider, ListsProvider} from '@ui/contexts'
import {CompleteState, IMappedUserProfile, IUIDefaultState, FormType, VisibilityState, ITodoList, ITodoListItem } from '@core/entities'

interface ILists_DefaultState {
    listsData: ITodoList | null
    visibilityState: VisibilityState
}

const itemOne: ITodoListItem = {
    _id: '2342342',
    title: 'ListItemOne',
    description: 'ItemOneDescription',
    complete: CompleteState.INCOMPLETE
}

const itemTwo: ITodoListItem = {
    _id: '345345',
    title: 'ListItemTwo',
    description: 'ItemTwoDescription',
    complete: CompleteState.INCOMPLETE
}

const listItems : ITodoListItem[] = [itemOne, itemTwo]

const mockList: ITodoList = {
    _id: '56456456465',
    title: 'test list',
    listItems:listItems
}

const mockDefaultState: ILists_DefaultState = {
    listsData: mockList,
    visibilityState: VisibilityState.VISIBLE
}

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


const meta: Meta<typeof ListsViewComponent> = {
    //title: 'design_system/Container',
    component: ListsViewComponent,
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
    parameters: {
        mockData: [
            {
                url: 'https://localhost:3000/list/all',
                method: 'GET',
                status: 200,
                response: {
                    data: {
                        lists:{
                            _id: '324234234',
                            title: 'Test List',
                            listItems: listItems
                        },
                        message: 'ok',
                        error: 'null'
                    },
                },
            },
        ],
    },
}


export default meta;

type Story = StoryObj<typeof ListsViewComponent>

export const TodoListsView: Story = {
    args:{
        
    }
}
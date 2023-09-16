import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectListButton as SelectListButtonComponent } from '../select-list-button'
import { UIProvider, ListsProvider } from '@ui/contexts'
import {CompleteState, VisibilityState, ITodoList, ITodoListItem } from '@core/entities'


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

const meta: Meta<typeof SelectListButtonComponent> = {
    //title: 'design_system/Container',
    component: SelectListButtonComponent,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <UIProvider>
                <ListsProvider
                    defaultState= {mockDefaultState}
                    list = {mockList}
                >
                    <Story />
                </ListsProvider>
            </UIProvider>
        ),
    ]
}

export default meta;

type Story = StoryObj<typeof SelectListButtonComponent>

export const SelectListButton: Story = {
    args:{
    }
}

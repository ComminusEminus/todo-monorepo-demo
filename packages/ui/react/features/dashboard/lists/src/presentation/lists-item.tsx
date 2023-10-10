import React from 'react'
import { useTheme } from 'styled-components'
import { ITodoList } from '@core/entities'
import { ListsProvider, useUIContext } from '@reactui/contexts'
import { ListBackground } from '@reactui/common'
import { SelectListButton } from '../components/select-list-button/presentation/select-list-button'
import { DeleteListButton } from '../components/delete-list-button/presentation/delete-list-button'

export interface IListsItem{
    item: ITodoList
}
export const ListsItem = ({item}: IListsItem) => {
    const { dispatch, state } = useUIContext()
    const { selectedTodoListId } = state

    const theme = useTheme()

    return (
        <ListsProvider list={item}>
            <ListBackground selectedId = {selectedTodoListId} currentId = {item._id} >
                <SelectListButton />
                <DeleteListButton />
            </ListBackground>
        </ListsProvider>
    )

}
